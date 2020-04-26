import getAllBlogPaths from './getAllBlogPaths';
import getEachBlogDetails from './getEachBlogDetails';


const getAllBlogsDetails = async () => {
  const allPaths = await getAllBlogPaths();
  const allBlogsDetails = [];


  for (const path of allPaths) {
    const { metaData, content } = await getEachBlogDetails(path.params.slug);
    allBlogsDetails.push({ metaData, content, slug: path.params.slug });
  }

  return allBlogsDetails;
};


export default getAllBlogsDetails;
