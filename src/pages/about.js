import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import getAllBlogDetails from '../utils/getAllBlogsDetails';
import BlogsContainer from '../components/BlogsContainer/BlogsContainer';

const About = (props) => {
  const { allBlogsDetails } = props;

  return (
    <>
      <NavBar />
      <BlogsContainer allBlogsDetails={allBlogsDetails} />
    </>
  );
};

export default About;


export const getStaticProps = async () => {
  const allBlogsDetails = await getAllBlogDetails();

  return {
    props: { allBlogsDetails },
  };
};
