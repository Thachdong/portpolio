import { Button } from '@my-portpolio/base-ui';
import React from 'react';

type THeaderProps = {};

export const Header: React.FC<Readonly<THeaderProps>> = () => {
  return (
    <ul className="flex gap-4 items-center border-b border-gray-300 px-2">
      <li>Dong.T</li>
      <li className="flex-grow"></li>
      <li>
        <a className='py-2 inline-block font-medium' href="#about">About Me</a>
      </li>
      <li className='text-gray-300'>|</li>
      <li>
        <a className='py-2 inline-block font-medium' href="#skills">Skills</a>
      </li>
      <li className='text-gray-300'>|</li>
      <li>
        <a className='py-2 inline-block font-medium' href="#projects">Projects</a>
      </li>
      <li className='text-gray-300'>|</li>
      <li>
        <a className='py-2 inline-block font-medium' href={'/blog'}>Blog</a>
      </li>
      <li className='text-gray-300'>|</li>
      <li>
        <a className='py-2 inline-block font-medium' href={'/blog_admin'}>Blog admin</a>
      </li>
      <li className="flex-grow"></li>
      <Button>Download CV</Button>
    </ul>
  );
};
