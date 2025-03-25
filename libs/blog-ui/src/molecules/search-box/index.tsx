'use client';
import React from 'react';

type TSearchBoxProps = {
  placeholder?: string;
};

const CLASSNAMES = {
  container: 'relative',
  input: 'w-full border border-gray-300 leading-10 rounded pl-2 pr-12',
  button:
    'absolute z-10 right-[0.5px] px-2 leading-10 hover:bg-gray-200 my-[1px] rounded rounded-l-none text-gray-500',
};

const DEFAULT_PLACEHOLDER = 'Searching blog title, category, description ...';

export const SearchBox: React.FC<Readonly<TSearchBoxProps>> = ({
  placeholder,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get('search') as string;

    console.log(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={CLASSNAMES.container}>
      <input
        className={CLASSNAMES.input}
        type="text"
        name="search"
        placeholder={DEFAULT_PLACEHOLDER || placeholder}
      />
      <button type="submit" className={CLASSNAMES.button}>
        Search
      </button>
    </form>
  );
};
