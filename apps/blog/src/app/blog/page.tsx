import { BlogList, CollapseMenu, SearchBox } from '@my-portpolio/blog-ui';

export default async function BlogPage() {
  return (
    <div>
      <SearchBox />
      <div className='grid grid-cols-[275px_1fr]'>
        <CollapseMenu />
        <BlogList />
      </div>
    </div>
  );
}
