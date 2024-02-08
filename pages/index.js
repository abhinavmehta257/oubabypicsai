import Head from "next/head";
import styles from "../styles/Home.module.css";
import Section1 from "../component/Section1";
import Section2 from "../component/Section2";
import Section3 from "../component/Section3";
import Section4 from "../component/Section4";
import Section5 from "../component/Section5";
import Section6 from "../component/Section6";
import Section7 from "../component/Section7";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        <Section6></Section6>
        <Section7></Section7>
        <Footer></Footer>
      </div>
    </>
  );
}
