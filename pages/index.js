import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Categorycard from "./components/Categorycard";
import Crouser from "./components/crouser";
import Filter from "./components/Filter";
import Filter2 from "./components/Filter2";
import { Footer } from "./components/Footer";
import Footer2 from "./components/Footer2";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Priceslider from "./components/Priceslider";
import Propertycardsa from "./components/Propertycardsa";
import Services from "./components/Services";
import Propertyslider from "./components/Propertyslider";


export default function Home() {
  return (
    <>
      
     <Banner3 />
      <Services/>
     <Propertyslider/>
    <Propertycardsa/>
      
    
    </>
  );
}
