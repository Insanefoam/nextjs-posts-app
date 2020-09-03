import React from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/mainLayout";

const Post = ({ post }) => {
  const router = useRouter();

  const backButtonHandler = () => router.push("/posts");

  return (
    <MainLayout title={post.title}>
      <div className="d-flex align-items-center justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={backButtonHandler}
        >
          👈
        </button>
        <h1 className="ml-4">{post.title}</h1>
      </div>
      <p>{post.body}</p>
    </MainLayout>
  );
};

// Post.getInitialProps = async (ctx) => {
//   const res = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
//   const post = await res.json();
//   return { post };
// };

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:4200/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:4200/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: {
      id: post.id,
    },
  }));
  return { paths, fallback: false };
};

export default Post;
