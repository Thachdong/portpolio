'use client';
import React, { useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import { markdownComponents } from '@/utility';
import { createPostAction } from '@/database';

export const CreatePostForm: React.FC = () => {
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
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={createPost}>
        <label>
          Upload markdown file
          <br />
          <input type="file" accept=".md" onChange={handleFileUpload} />
        </label>

        <br />

        <button
          className="border border-gray-300 rounded px-4 py-2 my-4 cursor-pointer"
          disabled={!mdxContent}
          type="submit"
        >
          Create
        </button>
      </form>
      <div className="mt-4 border border-gray-300 p-4 rounded overflow-auto">
        {mdxContent ? (
          <div style={{ all: 'unset' }}>
            <h3 className="font-bold">Front Matter:</h3>
            <ul>
              {frontMatter &&
                Object.entries(frontMatter).map(([key, value]) => (
                  <li key={key}>
                    <span className="font-bold">{key}:</span>
                    <span>{value?.toString()}</span>
                  </li>
                ))}
            </ul>
            <MDXRemote {...mdxContent} components={markdownComponents} />
          </div>
        ) : (
          <p className="italic text-xs">No content to preview</p>
        )}
      </div>
    </div>
  );
};
