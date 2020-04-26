import React from 'react';
import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import getAllBlogPaths from '../../utils/getAllBlogPaths';
import getEachBlogDetails from '../../utils/getEachBlogDetails';
import NavBar from '../../components/NavBar/NavBar';
import Typography from '../../UI/Typography/Typography';
import Footer from '../../components/Footer/Footer';
import Author from '../../components/AuthorDetails/AutorDetails';

const BlogTemplate = (props) => {
  const { metaData, content } = props;
  const theme = useTheme();

  const root = css({
    color: '#3F3D3D',
  });
  const container = css({
    maxWidth: '750px',
    a: {
      color: theme.palette.secondary.main,
      ':hover': {
        color: theme.palette.primary.main,
      },
    },
    margin: '100px auto',
    h1: {
      margin: '1rem auto 2rem auto',
      lineHeight: '1.4',
    },
    h3: {
      margin: '1rem auto 2rem auto',
    },
    p: {
      margin: '1rem auto 2rem auto',
      lineHeight: '1.8',
      fontSize: '21px',
    },
    ul: {
      margin: '1rem auto 2rem auto',
      fontSize: '21px',
    },
    li: {
      margin: '1rem 1.5rem',
    },
  });
  const titleStyle = css({
    color: theme.palette.primary.main,
  });

  return (
    <div css={root}>
      <NavBar isOnBlog />
      <div css={container}>
        <Author
          twitterUrl={metaData.twitterUrl}
          githubUrl={metaData.githubUrl}
          author={metaData.author}
          date={metaData.date}
          profileUrl={metaData.profileUrl}
        />
        <Typography css={titleStyle} component="h1">{metaData.title}</Typography>
        <ReactMarkdown source={content} />
      </div>
      <Footer />
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
