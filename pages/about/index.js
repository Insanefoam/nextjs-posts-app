import React from "react";
import MainLayout from "../../components/mainLayout";
import Head from "next/head";

const About = () => {
  return (
    <MainLayout>
      <Head>
        <title>About Page | Next.js</title>
      </Head>
      <h1>About Page</h1>
      <blockquote className="blockquote text-center">
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </MainLayout>
  );
};

export default About;
