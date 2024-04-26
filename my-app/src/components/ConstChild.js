import React from 'react'

function ConstChild(props) {
    const a = props.test;
  return (
    <div>
        {
              
        <div>
            <p>{a.title}</p>
            <p>{a.name}</p>
            <img src={a.image} alt='testimage'></img>
            <p>{a.description}</p>
        </div>
      
            }
    </div>
  )
}

export default ConstChild