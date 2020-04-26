import matter from 'gray-matter';;

const getEachBlogDetails = async(slug) => {

    const file = await import(`../blogs-content/${slug}.md`);
    const { data, content } = matter(file.default);

    return {
        metaData: data,
        content
    }
};

export default getEachBlogDetails;
