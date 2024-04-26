import React, { Component } from "react";
import css from "./css/Content.module.css";
import dog from "../posts.json";
import PostItem from "./PostItem";

export class Content extends Component {
    
    render() {
        return (
            <div className={css.Content}>
                
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                <div className={css.SearchResults}>
                    {
                        dog.savedPosts.map(dog => {
                            return <PostItem dog={dog} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Content