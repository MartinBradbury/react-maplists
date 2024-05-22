import React from "react"
import css from "./css/PostItem.module.css";


function PostItem(props) {
    return (
        props.martin.map(postzz => {
            // const {id, type, user, webformatURL, tags} = post
            return <div className={css.SearchItem} key={postzz.id}>
                <p>{postzz.type}</p>
                <p>{postzz.user}</p>
                <img src={postzz.webformatURL} alt="random"/>
                <p>{postzz.tags}</p>
            </div>
            }
        )
    )
}

export default PostItem