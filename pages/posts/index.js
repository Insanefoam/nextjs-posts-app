import MainLayout from "../../components/mainLayout";
import Link from "next/link";
import Head from "next/head";

const Posts = ({ posts }) => {
  return (
    <MainLayout>
      <Head>
        <title>Posts Page | Next.js</title>
      </Head>
      <h1 className="mb-3">Posts page</h1>
      <div className="list-group">
        {posts.map((post) => (
          <Link href="/posts/[:id]" as={`/posts/${post.id}`} key={post.id}>
            <a className="list-group-item list-group-item-action">
              {post.title}
            </a>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

// Posts.getInitialProps = async (_) => {
//   const res = await fetch("http://localhost:4200/posts");
//   const posts = await res.json();
//   return {
//     posts,
//   };
// };

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:4200/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
