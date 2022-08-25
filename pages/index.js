
import Head from "next/head";
import Image from "next/image";
import Layout from "../component/Layout/Layout";
import styles from "../styles/Home.module.css";
import SearchInput from "../component/SearchInput/SearchInput";

export default function Home({countries}) {
   
  console.log(countries)
  
  return (
    <Layout>
      <div className={styles.count} > found {countries.length} countries</div>
      <SearchInput placeholder="filter by name , Region or SubRegiion"/>
      
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};