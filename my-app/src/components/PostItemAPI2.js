import React from 'react';

function PostItemAPI2({ post }) {
  return (
    <>
      {post.map((posts) => (
        <div key={posts.id}>
          <p>{posts.type}</p>
          <p>{posts.body}</p>
        </div>
      ))}
    </>
  );
}

export default PostItemAPI2;