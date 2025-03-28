'use server';
import { TCreateComment } from '../types/comment';
import prisma from '../prisma';
import { Comment } from '@prisma/client';

const commentRepository = prisma.comment;

export async function createComment(comment: TCreateComment): Promise<Comment> {
  const result = await commentRepository.create({
    data: {
      content: comment.content,
      author: {
        connect: {
          id: comment.authorId,
        },
      },
      post: {
        connect: {
          id: comment.postId,
        },
      },
    },
  });

  return result;
}

export async function getCommentsByPostId(postId: string): Promise<Comment[]> {
  return commentRepository.findMany({
    where: { postId },
  });
}
