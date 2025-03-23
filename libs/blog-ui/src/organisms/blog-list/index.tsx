import Link from 'next/link';
import React from 'react';

type TBlogListProps = {};

const MOCK_POSTS: { id: string; title: string; displayImage: string }[] = [];

for (let i = 0; i < 8; i++) {
  MOCK_POSTS.push({
    id: 'post-' + i,
    title: 'Cấu trúc HTML5: Cách tạo template HTML5 đầu tiên - ' + i,
    displayImage: 'https://scand.com/wp-content/uploads/2021/04/JavaScript.jpg',
  });
}

const CLASSNAMES = {
  container: 'py-4 px-2 overflow-y-auto',
  header: 'flex justify-between items-center mb-4 border-b-2 border-[#2f6e91]',
  headerText: 'font-bold text-xl',
  headerLink: 'text-[#2f6e91]',
  list: 'grid grid-cols-4 gap-4 mb-8',
  card: 'border border-gray-300 rounded',
  title: 'text-center border-t border-gray-300',
};

export const BlogList: React.FC<Readonly<TBlogListProps>> = () => {
  return (
    <div
      className={CLASSNAMES.container}
      style={{ height: 'calc(100vh - 74px)' }}
    >
      <div className={CLASSNAMES.header} id='react'>
        <h4 className={CLASSNAMES.headerText}>ReactJS</h4>
        <Link className={CLASSNAMES.headerLink} href="/blog/category">View All</Link>
      </div>

      <ul className={CLASSNAMES.list}>
        {MOCK_POSTS.map((post) => (
          <li className={CLASSNAMES.card} key={post.id}>
            <img src={post.displayImage} alt={post.title} />
            <p className={CLASSNAMES.title}>{post.title}</p>
          </li>
        ))}
      </ul>

      <div className={CLASSNAMES.header} id="vue">
        <h4 className={CLASSNAMES.headerText}>VueJS</h4>
        <Link className={CLASSNAMES.headerLink} href="/blog/category">View All</Link>
      </div>

      <ul className={CLASSNAMES.list}>
        {MOCK_POSTS.map((post) => (
          <li className={CLASSNAMES.card} key={post.id}>
            <img src={post.displayImage} alt={post.title} />
            <p className={CLASSNAMES.title}>{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
