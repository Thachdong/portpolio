'use server';
import { EPostRole, Post } from '@prisma/client';
import prisma from '../prisma';
import { TCreatePost } from '../types/post';

const postRepository = prisma.post;

export async function createPostService(post: TCreatePost): Promise<Post> {
  return postRepository.create({
    data: post,
  });
}

export async function updatePostStatusService(
  id: string,
  status: EPostRole
): Promise<Post> {
  return postRepository.update({
    where: { id },
    data: { status },
  });
}

export async function getPostByIdService(id: string): Promise<Post | null> {
  return postRepository.findUnique({
    where: { id },
  });
}

export async function getPostsPaginatedService(
  page: number,
  limit: number
): Promise<Post[]> {
  return postRepository.findMany({
    skip: (page - 1) * limit,
    take: limit,
  });
}

export async function getPostsByCategoryIdAndPaginatedService(
  categoryId: string,
  page: number,
  limit: number
): Promise<Post[]> {
  return postRepository.findMany({
    where: { categoryId },
    skip: (page - 1) * limit,
    take: limit,
  });
}
