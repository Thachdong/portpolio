'use client';
import React, { useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { markdownComponents } from '@my-portpolio/utilities';

export const CreatePostForm: React.FC = () => {
  const [mdxContent, setMdxContent] = useState<MDXRemoteSerializeResult | null>(
    null
  );

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const text = await file.text();
      const serializedContent = await serialize(text);
      setMdxContent(serializedContent);
    }
  };

  return (
    <div className="p-4">
      <form>
        <label>
          Upload markdown file
          <br />
          <input type="file" accept=".md" onChange={handleFileUpload} />
        </label>
      </form>
      <div className="mt-4 border border-gray-300 p-4 rounded h-[768px] overflow-auto">
        {mdxContent ? (
          <div style={{ all: 'unset' }}>
            <MDXRemote {...mdxContent} components={markdownComponents} />
          </div>
        ) : (
          <p className="italic text-xs">No content to preview</p>
        )}
      </div>
    </div>
  );
};
