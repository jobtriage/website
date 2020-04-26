import getAllBlogPaths from './getAllBlogPaths';
import getEachBlogDetails from './getEachBlogDetails';


const getAllBlogsDetails = async () => {
  const allPaths = await getAllBlogPaths();
  const allBlogsDetails = [];


  for (const path of allPaths) {
    const { metaData, content } = await getEachBlogDetails(path.params.slug);
    const idx = metaData.blogNumber;
    if (idx === 1) {
      allBlogsDetails[0] = { metaData, content, slug: path.params.slug };
    } else {
      const total = allPaths.length;
      const newIdx = total - idx + 1;
      allBlogsDetails[newIdx] = { metaData, content, slug: path.params.slug };
    }
  }

  return allBlogsDetails;
};


export default getAllBlogsDetails;
