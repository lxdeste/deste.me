import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import blogPosts from "../blogPosts";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  const title = `Alex d'Este`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Alex d'Este - Software Developer - Cape Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex flex-col items-center justify-center">
        <div className="flex flex-col w-3/5 py-72">
          <div className="mb-8">
            <svg viewBox="0 0 1802 311" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 303.267L251.4 138.714L355.933 105.4L415.667 10L481 31.2L538.867 105.4M609.8 225.533L538.867 105.4M538.867 105.4H594.867L630.094 12.5824L754.467 10H929H1125.87H1265L1291 87.7333L1361 105.4L1391 150L1415 200M1415 200L1471 174L1544.87 87.7333L1599 126L1627 200L1797 303.267M1415 200L1341 236"
                className="stroke-black dark:stroke-white"
                strokeWidth="16"
              />
            </svg>
          </div>
          <div>
            <h1 className="mb-2 text-6xl">
              Hi, my name is <span className="font-bold">Alex</span>
            </h1>
            <h2 className="text-3xl font-light ">
              I am a Fullstack Software Developer based in Cape Town, South Africa.
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-center w-full pt-12 pb-60">
          <div className="w-3/5">
            <h1 className="mb-8 text-4xl">Latest Blog Posts</h1>
            <div className="grid grid-cols-3 gap-4">
              {blogPosts.map((post) => {
                return (
                  <Link key={post.id} href={`blog/${post.id}`}>
                    <div className="p-4 bg-gray-100 border-8 border-black cursor-pointer hover:animate-shake motion-reduce:hover:animate-none hover:bg-gray-200 dark:border-white dark:bg-slate-700 dark:hover:bg-slate-600 ">
                      <a>
                        <span className="text-xl">{post.title}</span>
                      </a>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
