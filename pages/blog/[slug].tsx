import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const BlogPostTemplate: NextPage = () => {
  const title = `Alex d'Este`;

  const router = useRouter();
  const { id: slug } = router.query;

  // TODO: this is irrelevant now
  // const post = blogPosts.find((post) => post.id === slug);

  // const frontmatter = data;

  return (
    <>
      <Head>
        <title>{title}</title>
        {/* TODO: update this */}
        {/* <meta name="description" content="Blog and projects" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* <div>This is my blog post page</div>
      <div>Title: {post?.title}</div>
      <div>Content: {post?.content}</div> */}

      <Footer />
    </>
  );
};

export default BlogPostTemplate;
