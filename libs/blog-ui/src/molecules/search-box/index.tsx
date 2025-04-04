'use client';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type TSearchBoxProps = {
  placeholder?: string;
};

const CLASSNAMES = {
  container: 'relative max-w-xl',
  input:
    'w-full border-2 border-deep-teal rounded-lg py-2 px-4 pr-12 text-lg focus:outline-none focus:border-burnt-orange transition-colors',
  button:
    'absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-deep-teal text-soft-cream rounded-md hover:bg-burnt-orange transition-colors',
};

const DEFAULT_PLACEHOLDER = 'Search posts...';

export const SearchBox: React.FC<Readonly<TSearchBoxProps>> = ({
  placeholder,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const searchTerm = formData.get('search') as string;

    const currentHash = window.location.hash;

    const hashSuffix = currentHash ? currentHash : '';

    router.push(
      `/blog?search=${searchTerm.toLocaleLowerCase().trim()}${hashSuffix}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className={CLASSNAMES.container}>
      <input
        className={CLASSNAMES.input}
        type="text"
        name="search"
        placeholder={placeholder || DEFAULT_PLACEHOLDER}
        defaultValue={searchQuery}
      />
      <button type="submit" className={CLASSNAMES.button}>
        Search
      </button>
    </form>
  );
};
