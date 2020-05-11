import getAllBlogPaths from './getAllBlogPaths';
import getEachBlogDetails from './getEachBlogDetails';


const getAllBlogsDetails = async () => {
  const allPaths = await getAllBlogPaths();
  const allBlogsDetails = [];


  for (const path of allPaths) {
    // eslint-disable-next-line no-await-in-loop
    const { metaData, content } = await getEachBlogDetails(path.params.slug);
    const value = { metaData, content, slug: path.params.slug };
    const idx = metaData.blogNumber;
    if (idx === 1) {
      allBlogsDetails[0] = value;
    } else {
      const newIdx = allPaths.length - idx + 1;
      allBlogsDetails[newIdx] = value;
    }
  }

  return allBlogsDetails;
};


export default getAllBlogsDetails;
