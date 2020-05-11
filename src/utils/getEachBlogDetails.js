import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

const getEachBlogDetails = async (slug) => {
  const filePath = path.join(process.cwd(), `src/blogs-content/${slug}.md`);
  const file = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const { data, content } = matter(file);

  return {
    metaData: data,
    content,
  };
};

export default getEachBlogDetails;
