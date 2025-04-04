'use client';
import React, { useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import { markdownComponents } from '@/utility';
import { createPostAction } from '@/database';
import { useRouter } from 'next/navigation';

const CLASSNAMES = {
  wrapper: 'w-full max-w-5xl mx-auto px-8 py-12',
  heading: 'text-4xl font-bold text-dark-jungle mb-12 border-b pb-4',
  form: 'mb-12',
  inputWrapper:
    'rounded-xl bg-soft-cream p-8 shadow-lg border-2 border-deep-teal/20 hover:border-deep-teal transition-colors duration-300',
  label: 'block text-xl text-deep-teal font-bold mb-4',
  fileInput: `
    mt-2 block w-full text-lg text-deep-teal/80
    file:mr-6 file:py-4 file:px-8 
    file:rounded-lg file:border-2 file:border-deep-teal
    file:font-medium file:bg-transparent file:text-deep-teal
    hover:file:bg-deep-teal hover:file:text-soft-cream hover:file:border-transparent
    file:cursor-pointer file:transition-all file:duration-300
  `,
  submitButton: `
    w-full sm:w-auto px-6 py-2 mt-4
    bg-lime-green text-dark-jungle
    rounded-md font-semibold
    border-2 border-deep-teal
    hover:bg-dark-jungle hover:text-soft-cream
    transition-all
    disabled:opacity-60 disabled:cursor-not-allowed
  `,
  previewWrapper:
    'mt-12 border-2 border-deep-teal/20 rounded-xl p-8 bg-white shadow-lg',
  previewContent: 'prose lg:prose-lg max-w-none',
  frontMatterHeading:
    'text-2xl font-bold text-dark-jungle mb-6 pb-4 border-b border-deep-teal/20',
  frontMatterList: 'mb-8 space-y-6',
  frontMatterItem: 'flex items-center gap-4',
  frontMatterKey: 'font-bold text-deep-teal min-w-[160px] text-lg',
  frontMatterValue: 'text-dark-jungle text-lg',
  mdxContent:
    'prose lg:prose-lg prose-headings:text-dark-jungle prose-a:text-deep-teal hover:prose-a:text-burnt-orange prose-a:transition-colors prose-img:rounded-lg',
  placeholder:
    'text-deep-teal/60 text-lg italic text-center py-16 bg-soft-cream rounded-lg',
};

export const CreatePostForm: React.FC = () => {
  const router = useRouter();

  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(
    null
  );
  const [file, setFile] = useState<File | null>(null);
  const [frontMatter, setFrontMatter] = useState<Record<string, string> | null>(
    null
  );

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);

      const text = await file.text();
      const { data: frontMatter, content } = matter(text);
      setFrontMatter(frontMatter);

      const serializedContent = await serialize(content);
      setMdxContent(serializedContent);
    }
  };

  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      await createPostAction(file);

      router.push('/blog_admin/posts');
    }
  };

  return (
    <div className={CLASSNAMES.wrapper}>
      <h1 className={CLASSNAMES.heading}>Create New Post</h1>

      <form onSubmit={createPost} className={CLASSNAMES.form}>
        <div className={CLASSNAMES.inputWrapper}>
          <label className={CLASSNAMES.label}>
            Upload Markdown File
            <input
              type="file"
              accept=".md"
              onChange={handleFileUpload}
              className={CLASSNAMES.fileInput}
            />
          </label>
        </div>

        <button
          className={CLASSNAMES.submitButton}
          disabled={!mdxContent}
          type="submit"
        >
          Create Post
        </button>
      </form>

      <div className={CLASSNAMES.previewWrapper}>
        {mdxContent ? (
          <div className={CLASSNAMES.previewContent}>
            <h3 className={CLASSNAMES.frontMatterHeading}>Front Matter</h3>
            <ul className={CLASSNAMES.frontMatterList}>
              {frontMatter &&
                Object.entries(frontMatter).map(([key, value]) => (
                  <li key={key} className={CLASSNAMES.frontMatterItem}>
                    <span className={CLASSNAMES.frontMatterKey}>{key}:</span>
                    <span className={CLASSNAMES.frontMatterValue}>
                      {value?.toString()}
                    </span>
                  </li>
                ))}
            </ul>
            <div className={CLASSNAMES.mdxContent}>
              <MDXRemote {...mdxContent} components={markdownComponents} />
            </div>
          </div>
        ) : (
          <p className={CLASSNAMES.placeholder}>
            Upload a markdown file to preview content
          </p>
        )}
      </div>
    </div>
  );
};
