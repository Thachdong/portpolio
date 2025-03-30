'use server';
import { TComment, TCreateComment } from '../types/comment';
import prisma from '../prisma';

const commentRepository = prisma.comment;

/**
 * Create a new comment
 * @param comment - The comment to create
 * @returns The created comment
 */
export async function createCommentService(
  comment: TCreateComment
): Promise<TComment> {
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
    include: {
      author: true,
    },
  });

  return {
    id: result.id,
    content: result.content,
    author: result.author.name,
    postId: result.postId,
    createdAt: result.createdAt.toISOString(),
  };
}

/**
 * Get comments by post id
 * @param postId - The id of the post
 * @returns The comments
 */
export async function getCommentsByPostIdService(
  postId: string
): Promise<TComment[]> {
  const comments = await commentRepository.findMany({
    where: { postId },
    include: {
      author: true,
    },
  });

  return comments.map((comment) => ({
    id: comment.id,
    content: comment.content,
    author: comment.author.name,
    postId: comment.postId,
    createdAt: comment.createdAt.toISOString(),
  }));
}
