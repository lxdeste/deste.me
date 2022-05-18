import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const About: NextPage = () => {
  const title = `Alex d'Este`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Blog and projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>This is my about page</div>

      <Footer />
    </>
  );
};

export default About;
