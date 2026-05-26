'use client'

import styles from './productlist.module.css'
import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { Product } from '@/types/Product';

export default function ProductList() {
    const [products , setProducts] = useState([] as Product[]);
    const [productsList, setProductsList] = useState([] as Product[]);
    const [search , setSearch] = useState("");

    // vai ser executado toda vez que o search mudar
    // use effect é quase como se fosse um evento ele é um EFEITO colateral
    // parametro 1 - função do que será feito, parametro 2 - lista de depedencias
    useEffect(() => {
      const filteredProducts = products.filter(el => {
        // compara ignorando o case das letras
        return el.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      })

      if(search == "") {
        setProductsList(products);
      }else {
        setProductsList(filteredProducts);
      }
      
    },[search])

    async function BuscaProdutos() {
      const request = await fetch("http://localhost:3000/api/products")
      const json = await request.json();
      setProducts(json.products)
      setProductsList(json.products)
    }

    useEffect(() => {
       BuscaProdutos();
    },[])

    // mapear de Product para ProductCard
    return (
        <section className={styles.produtos}>
          <h2>Produtos recomendados:</h2>
          <input type="text" value={search} onChange={el => setSearch(el.target.value)}/>
          <button onClick={() => setSearch("")}>Limpar</button>
          <div className={styles.productList}>
            {productsList.map(product => {
              return <ProductCard key={product._id} product={product} /> 
            })}
          </div>
        </section>
    );
}