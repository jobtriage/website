import React from 'react';

const BlogPreview = (props) => {
  const { title, description } = props;

  return (
    <li>
      {title}
    </li>
  );
};

export default BlogPreview;
