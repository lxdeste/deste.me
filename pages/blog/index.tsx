import fs from "fs";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import matter from "gray-matter";
import Link from "next/link";

type Props = {
  posts: {
    slug: string;
    frontmatter: {
      [key: string]: any;
    };
  }[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Get all our posts
  const files = fs.readdirSync("content");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`content/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

const Blog: NextPage<Props> = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const title = `Alex d'Este`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Blog and projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="flex items-center justify-center w-full pt-12 pb-60">
        <div className="w-3/5">
          <div className="grid grid-cols-3 gap-4">
            {posts.map(({ slug, frontmatter }) => (
              <Link key={slug} href={`blog/${slug}`}>
                <div className="p-4 bg-gray-100 border-8 border-black cursor-pointer hover:animate-shake motion-reduce:hover:animate-none hover:bg-gray-200 dark:border-white dark:bg-slate-700 dark:hover:bg-slate-600 ">
                  <a>
                    <span className="text-xl">{frontmatter.title}</span>
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* TODO: redesign this */}

      <Footer />
    </>
  );
};

export default Blog;
