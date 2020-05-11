import getEachBlogDetails from '../getEachBlogDetails';

describe('Parse individual blog', () => {
  it('Should parse the file correctly', async () => {
    const { metaData, content } = await getEachBlogDetails('job-triage');

    expect(metaData).toEqual({
      title: 'JobTriage: Organize your job search',
      description: 'JobTriage is the new open-source project for managing your job search. It is indeed an interactive way to manage and track your job applications with a kanban board. In this post, I will discuss the features and some important components of the job search.',
      author: 'Koushik Mohan',
      twitterUrl: 'https://twitter.com/KoushikKM96',
      githubUrl: 'https://github.com/koushikmohan1996',
      profileUrl: 'https://pbs.twimg.com/profile_images/1219120872851525633/3ILVi6eM_400x400.jpg',
      date: 'April 26, 2020',
      blogNumber: 1,
    });

    expect(typeof content).toBe('string');
  });
});
