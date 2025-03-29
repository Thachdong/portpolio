'use server';
import matter from 'gray-matter';
import { EPostRole } from '@prisma/client';
import { ES3Folder, frontMatterSchema } from '@/utility';
import { createServerAction } from './create-server-action';
import { uploadFile } from '../services/s3-services';
import { createPostService } from '../services/post-services';
import { TCreatePost } from '../types/post';

/**
 * Create new post
 *
 * @param mdFile
 * @implements
 * - extract front matter
 * - validate front matter
 * - upload md file to S3
 * - create post in database
 *
 * @returns void
 */
async function createPost(mdFile: File): Promise<void> {
  // Extract front matter and content
  const text = await mdFile.text();

  const { data: frontMatter } = matter(text);

  // Validate front matter
  const parsedFrontMatter = frontMatterSchema.safeParse(frontMatter);

  if (!parsedFrontMatter.success) {
    throw new Error(`Invalid front matter: ${parsedFrontMatter.error.message}`);
  }

  // upload file to S3 with hash in filename
  const filename = `${new Date().getTime()}-${mdFile.name}`;

  console.log('filename', filename);

  await uploadFile(mdFile, filename, ES3Folder.POSTS);

  // create post in database
  const posts: TCreatePost = {
    filename,
    title: parsedFrontMatter.data.title,
    authorId: parsedFrontMatter.data.authorId,
    categoryId: parsedFrontMatter.data.categoryId,
    status: EPostRole.IDLE,
  };

  await createPostService(posts);
}

export const createPostAction = createServerAction(createPost);
