import React from 'react';
import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
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
    margin: '100px auto',
  });

  const titleStyle = css({
    color: theme.palette.primary.main,
  });

  const article = css({
    a: {
      color: theme.palette.secondary.main,
      ':hover': {
        color: theme.palette.primary.main,
      },
    },
    h1: {
      margin: '1rem auto 2rem auto',
      lineHeight: '1.4',
    },
    h3: {
      margin: '1rem auto 2rem auto',
      lineHeight: '1.4',
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
    img: {
      width: '100%',
      margin: '1rem auto 2rem auto',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    },
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
        <article css={article}>
          <ReactMarkdown source={content} />
        </article>
      </div>
      <Footer />
    </div>
  );
};

BlogTemplate.propTypes = {
  metaData: PropTypes.objectOf(PropTypes
    .oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  content: PropTypes.string.isRequired,
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
