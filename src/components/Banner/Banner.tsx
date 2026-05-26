import styles from "./banner.module.css"

export default function Banner() {
    return (
         <section className={styles.banner}>
            <div>
              <h1>O melhor da pescaria</h1>
              <p>Compre seus produtos de pesca com qualidade e segurança</p>
            </div>
        </section>
    );
}