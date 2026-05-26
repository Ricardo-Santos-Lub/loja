'use client'

import { useState } from 'react';
import styles from './page.module.css'

export default function ProductsPage() {

    const [name, setName] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");


    async function handleSubmit(e: any) {
        e.preventDefault();
        console.log(name, preco, imagem);

        const response = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "price": preco,
                "image": imagem
            })
        })

        if(response.ok) {
            alert("Produto cadastrado com sucesso");
        }else {
            alert("Erro ao cadastrar produto via API");
        }
    }

    const preencheu = name && preco && imagem;

    return (
        <section>
            <form className={styles.formProduto}>
                <h1>Cadastro de produtos</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="nome do produto" />
                <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)}placeholder="Preco do produto" />
                <input type="text" value={imagem} onChange={(e) => setImagem(e.target.value)} placeholder="URL Imagem do produto" />
                <button onClick={handleSubmit} disabled={!preencheu}>Cadastrar</button>
            </form>
        </section>
    );
}