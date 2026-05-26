import Image from 'next/image'
import styles from './productcard.module.css'
import { Product } from '@/types/Product';

export default function ProductCard({product} : {product: Product}) {
    return (
        <div className={styles.productCard}>
            <Image src={product.image} alt={"Carretilha"} width="200" height={"200"}/>
            <p>{product.name}</p>
            <p className={styles.price}>R$ {product.price}</p>
        </div>
    );
}