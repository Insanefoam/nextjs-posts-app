import React from "react";
import MainLayout from "../../components/MainLayout";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps = async (_) => {
  const res = await fetch("http://localhost:4200/about");
  const about = await res.json();
  return { props: about };
};

const About = ({
  title,
  body,
}): InferGetStaticPropsType<typeof getStaticProps> => {
  return (
    <MainLayout title="About Page">
      <h1>{title}</h1>
      <blockquote className="blockquote text-center">
        <p className="mb-0">{body}</p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </MainLayout>
  );
};

export default About;
