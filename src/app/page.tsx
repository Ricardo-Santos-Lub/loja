import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import AppBar from "@/components/AppBar/AppBar";
import ProductList from "@/components/ProductList/ProductList";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      
      <main>
        <Banner />
        <ProductList />
      </main>
    </>
  );
}
