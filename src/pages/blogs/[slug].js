import React from 'react';
import ReactMarkdown from 'react-markdown';
import getAllBlogPaths from '../../utils/getAllBlogPaths';
import getEachBlogDetails from '../../utils/getEachBlogDetails';

const BlogTemplate = (props) => {
  const { metaData, content } = props;

  return (
    <div>
      <h1>{metaData.title}</h1>
      <ReactMarkdown source={content} />
    </div>
  );
};

export default BlogTemplate;

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const { metaData, content } = await getEachBlogDetails(slug);

  return {
    props: { metaData, content },
  };
};

export const getStaticPaths = async () => {
  const allPaths = await getAllBlogPaths();

  return {
    paths: allPaths,
    fallback: false,
  };
};
