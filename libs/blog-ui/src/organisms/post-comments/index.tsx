'use client';
import { TComment } from '@/database';
import React, { useEffect, useState } from 'react';

type TPostDetailProps = {
  postId: string;
  currentComments: TComment[];
};

const CLASSNAMES = {
  container: 'bg-soft-cream rounded-lg shadow-sm p-6',
  header: 'font-bold text-xl text-dark-jungle border-b-2 border-deep-teal mb-6',
  editor:
    'w-full border-2 border-deep-teal rounded-lg p-4 focus:outline-none focus:border-burnt-orange transition-colors min-h-[120px] mb-4',
  button:
    'bg-deep-teal text-soft-cream px-6 py-2 rounded-lg hover:bg-burnt-orange transition-colors',
  emptyState: 'text-deep-teal/60 text-center my-8 italic',
  commentsList: 'space-y-6 mt-8',
  commentContainer: 'border-b border-deep-teal/20 pb-6',
  commentHeader: 'flex items-center gap-3 mb-3',
  author: 'font-medium text-deep-teal',
  date: 'text-sm text-deep-teal/60',
  content: 'text-dark-jungle leading-relaxed',
};

export const PostComments: React.FC<Readonly<TPostDetailProps>> = ({
  postId,
  currentComments,
}) => {
  const [comments, setComments] = useState<TComment[]>([]);

  // #region -- handlers
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const comment = formData.get('comment') as string;

    if (!comment) {
      return;
    }

    await fetch('/api/chat/send', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        message: comment,
        sender: 'cm8q74f0i0000sbcsgxtroxy2',
      }),
    });

    (e.target as HTMLFormElement).reset();
  };
  // #endregion

  // #region -- side effects
  useEffect(() => {
    setComments(currentComments);
  }, [currentComments]);

  useEffect(() => {
    const eventSource = new EventSource(`/api/chat/stream?postId=${postId}`);

    eventSource.onmessage = (event) => {
      const data: TComment = JSON.parse(event.data);
      setComments((prev) => [{ ...data }, ...prev]);
    };

    eventSource.onerror = (error) => {
      console.log(error);
    };

    return () => {
      eventSource.close();
    };
  }, [postId]);
  // #endregion

  return (
    <div className={CLASSNAMES.container}>
      <h4 className={CLASSNAMES.header}>Comments</h4>

      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          id="comment"
          placeholder="Share your thoughts..."
          className={CLASSNAMES.editor}
        ></textarea>

        <button type="submit" className={CLASSNAMES.button}>
          Post Comment
        </button>
      </form>

      {comments.length === 0 ? (
        <p className={CLASSNAMES.emptyState}>Be the first to comment!</p>
      ) : (
        <div className={CLASSNAMES.commentsList}>
          {comments.map((comment) => (
            <div key={comment.id} className={CLASSNAMES.commentContainer}>
              <div className={CLASSNAMES.commentHeader}>
                <span className={CLASSNAMES.author}>{comment.author}</span>
                <span className={CLASSNAMES.date}>
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className={CLASSNAMES.content}>{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
