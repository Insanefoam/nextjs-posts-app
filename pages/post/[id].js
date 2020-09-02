import React from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/mainLayout";

const Post = ({ post }) => {
  const router = useRouter();

  const backButtonHandler = () => router.back();

  return (
    <MainLayout>
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

Post.getInitialProps = async (ctx) => {
  const res = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await res.json();
  return { post };
};

export default Post;
