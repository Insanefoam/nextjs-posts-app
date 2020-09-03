import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Next.js</title>
      </Head>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mr-auto">
          <Link href="/">
            <a className="navbar-brand">Next.js posts</a>
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/posts">
                  <a className="nav-link">Posts</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="pl-5 pr-5 text-center pt-2">{children}</main>
    </>
  );
};

export default MainLayout;
