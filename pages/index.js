import Link from "next/link";
import MainLayout from "../components/mainLayout";
import Head from "next/head";

const Index = () => (
  <MainLayout>
    <Head>
      <title>Posts App | Next.js</title>
    </Head>
    <h1>Next.js application main page</h1>
    <p>
      <Link href="/posts">
        <a>View all posts</a>
      </Link>
    </p>
  </MainLayout>
);

export default Index;
