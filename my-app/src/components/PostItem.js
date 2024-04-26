import React from "react"



function PostItem(props) {
    const dog = props.dog
    return (
            <div>
                <p>{dog.title}</p>
                <p>{dog.name}</p>
                <img src={dog.image} alt="random"/>
                <p>{dog.description}</p>
            </div>
    ) 
}

export default PostItem