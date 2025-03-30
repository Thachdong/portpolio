'use client';
import { TComment } from '@/database';
import React, { useEffect, useState } from 'react';

type TPostDetailProps = {
  postId: string;
  currentComments: TComment[];
};

const CLASSNAMES = {
  header: 'font-bold mb-4',
  editor: 'w-full border border-gray-300 rounded p-2',
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
      setComments((prev) => [...prev, { ...data }]);
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
    <div>
      <h4 className={CLASSNAMES.header}>COMMENTS</h4>

      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          id="comment"
          placeholder="Leave you comment ..."
          className={CLASSNAMES.editor}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>

      {comments.length === 0 ? (
        <p className="text-gray-500 text-center my-4">No comments yet</p>
      ) : (
        <div className="space-y-4 mt-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">{comment.author}</span>
                <span className="text-sm text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
