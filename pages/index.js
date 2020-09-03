import Link from "next/link";
import MainLayout from "../components/mainLayout";

const Index = () => (
  <MainLayout title="Main Page">
    <h1>Next.js application main page</h1>
    <p>
      <Link href="/posts">
        <a>View all posts</a>
      </Link>
    </p>
  </MainLayout>
);

export default Index;
