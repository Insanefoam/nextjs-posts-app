import MainLayout from "../../components/mainLayout";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <MainLayout>
      <h1 className="mb-3">Posts page</h1>
      <div className="list-group">
        {posts.map((post) => (
          <Link href="/post/[:id]" as={`/post/${post.id}`} key={post.id}>
            <a className="list-group-item list-group-item-action">
              {post.title}
            </a>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

Posts.getInitialProps = async (_) => {
  const res = await fetch("http://localhost:4200/posts");
  const posts = await res.json();
  return {
    posts,
  };
};

export default Posts;
