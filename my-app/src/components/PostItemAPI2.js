import React from 'react'

function PostItemAPI2(props) {
  return (
    props.martin.map(p => {
      return <div>
        <p>{p.type}</p>
        <p>{p.user}</p>
        <img src={p.webformatURL}/>
        <p>{p.tags}</p>
      </div>
    })
  )}

export default PostItemAPI2