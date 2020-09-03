import React from "react";
import MainLayout from "../../components/mainLayout";

const About = ({ title, body }) => {
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

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4200/about");
  const about = await res.json();
  return { props: about };
};

export default About;
