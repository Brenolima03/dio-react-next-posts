import Layout, { GradientBackground } from "../../components/Layout";
import { getGlobalData } from "../../utils/global-data";
import { getPostById } from "../../utils/mdx-utils";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SEO from "../../components/SEO";
import Link from "next/link";

export default function PostPage({ posts, globalData }) {
  const post = posts && posts[0]; // Access the first item of the array

  if (!post) {
    return (
      <Layout>
        <SEO title="Post not found" description="The requested post could not be found" />
        <Header name={globalData.name} />
        <main className="w-full">
          <h1 className="text-3xl lg:text-5xl text-center mb-12">
            Post not found
          </h1>
        </main>
        <Footer copyrightText={globalData.footerText} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${post.title} - ${globalData.name}`}
        description={post.description || "No description available"}
      />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">{post?.title}</h1>

        <div className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
          <Link as={`/posts/${post.id}`} href={`/posts/${post.id}`}>
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">{post.title}</h2>
              {post.description && (
                <p className="mt-3 text-lg opacity-60">{post.description}</p>
              )}

              <div className="mt-6 prose dark:prose-dark">
                {post.body}
              </div>
            </a>
          </Link>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const posts = await getPostById(params.id);

  if (!posts || posts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      globalData,
      posts,
    },
  };
};
