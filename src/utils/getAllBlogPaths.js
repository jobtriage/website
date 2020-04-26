import path from 'path';
import fs from 'fs';

const getAllBlogPaths = async () => {
  // read blogs-content directory
  const allPaths = [];
  const directoryPath = path.join(process.cwd(), 'src/blogs-content');
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
