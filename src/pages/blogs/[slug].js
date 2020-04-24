import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';

const BlogTemplate = (props) => {
  const { data, content } = props

  return (
    <div>
      <h1>{data.title}</h1>
      <ReactMarkdown source={content} />
    </div>
  )
}

export default BlogTemplate;

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const file = await import(`../../blogs-content/${slug}.md`);
  const { data, content } = matter(file.default);

  return {
    props: { data, content }
  }
};

export const getStaticPaths = async () => {
  // read blogs-content directory
  const allPaths = [];
  const directoryPath = path.join(process.cwd(), 'src/blogs-content');
  const files = fs.readdirSync(directoryPath);

  // extract file base name for the params.
  files.forEach((file) => {
    const extname = path.extname(file);
    const fileName = path.basename(file, extname);
    allPaths.push({ params: { slug: fileName } })
  })

  return {
    paths: allPaths,
    fallback: false
  }
}

