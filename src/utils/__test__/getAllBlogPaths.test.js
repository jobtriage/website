import getAllBlogPaths from '../getAllBlogPaths';

describe('Read the blog directory', () => {
  it('Should have a correct number of files', async () => {
    const directory = 'src/test-utils/dummy-blog-directory';
    const allPaths = await getAllBlogPaths(directory);
    expect(allPaths).toHaveLength(1);
  });

  it('Should read the file correctly', async () => {
    const allPaths = await getAllBlogPaths();
    expect(allPaths[0]).toEqual({ params: { slug: 'job-triage' } });
  });
});
