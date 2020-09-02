import React from "react";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  return <div>Page for specific post with id: {router.query.id}</div>;
};

export default Post;
