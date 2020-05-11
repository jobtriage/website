import getAllBlogsDetails from '../getAllBlogsDetails';

jest.mock('../getAllBlogPaths', () => {
  return {
    __esModule: true,
    default: jest.fn(() => [
      { params: { slug: 'blog-1' } },
      { params: { slug: 'blog-2' } },
      { params: { slug: 'blog-3' } },
    ]),
  };
});

jest.mock('../getEachBlogDetails', () => {
  return {
    __esModule: true,
    default: jest.fn((arg) => {
      switch (arg) {
        case 'blog-1':
          return {
            metaData: {
              blogNumber: 1,
            },
            content: 'This is a test content',
            slug: 'blog-1',
          };
        case 'blog-2':
          return {
            metaData: {
              blogNumber: 2,
            },
            content: 'This is a test content',
            slug: 'blog-2',
          };

        case 'blog-3':
          return {
            metaData: {
              blogNumber: 3,
            },
            content: 'This is a test content',
            slug: 'blog-3',
          };

        default:
          return null;
      }
    }),
  };
});

describe('All blogs details', () => {
  let allBlogs;

  (async () => {
    allBlogs = await getAllBlogsDetails();
  })();

  it('Should have correct number of blogs ', async () => {
    expect(allBlogs).toHaveLength(3);
  });

  it('Should pin the first blog at position 1', () => {
    expect(allBlogs[0].metaData.blogNumber).toBe(1);
  });

  it('Should pin the rest blogs in oreder of most recent', () => {
    expect(allBlogs[1].metaData.blogNumber).toBe(3);
    expect(allBlogs[2].metaData.blogNumber).toBe(2);
  });
});
