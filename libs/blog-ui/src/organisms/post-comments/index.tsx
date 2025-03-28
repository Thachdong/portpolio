import React from 'react';

type TPostCommentProps = {};

const CLASSNAMES = {
  header: 'font-bold mb-4',
  editor: 'w-full border border-gray-300 rounded p-2',
};

export const PostComments: React.FC<Readonly<TPostCommentProps>> = () => {
  return (
    <div>
      <h4 className={CLASSNAMES.header}>COMMENTS</h4>

      <textarea
        name="comment"
        id="comment"
        placeholder="Leave you comment ..."
        className={CLASSNAMES.editor}
      ></textarea>

      <p>no comments existed!</p>
    </div>
  );
};
