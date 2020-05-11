import path from 'path';
import fs from 'fs';

const getAllBlogPaths = (directory = 'src/blogs-content') => {
  // read blogs-content directory
  const allPaths = [];
  const directoryPath = path.join(process.cwd(), directory);
  const files = fs.readdirSync(directoryPath);

  // extract file base name
  files.forEach((file) => {
    const extname = path.extname(file);
    const fileName = path.basename(file, extname);
    allPaths.push({ params: { slug: fileName } });
  });

  return allPaths;
};

export default getAllBlogPaths;
