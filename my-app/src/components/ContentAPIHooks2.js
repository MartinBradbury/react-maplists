import axios from 'axios';
import React, { useState, useEffect} from 'react'
import API_KEY from '../secrets.js'
import PostItemAPI2 from './PostItemAPI2.js';
import Loader from './Loader.js';

function ContentAPIHooks2() {
    const [post, setPost] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [savedPosts, setSavedPosts] = useState([]);

    useEffect(() => {
        fetchImages()
    }, []);

    const fetchImages = async () => {
        const res = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page
                =100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const returnPosts = res.data.hits;
        setPost(returnPosts);
        setIsLoaded(true);
        setSavedPosts(returnPosts);
    }

    const handleChange = (e) => {
        const search = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post) => {
            return post.user.toLowerCase().includes(search);
        })
        setPost(filteredPosts)
    }

  return(
    <div>
        <form>
            <label htmlFor="SearchInput">Search</label>
            <input 
                placeholder="search"
                type="search"
                id="searchinput"
                //The on change function, need to write handlechange function. 
                onChange={(e) => handleChange(e)}
                />
                <h4>Posts Found {post.length}</h4>
        
        </form>
        {
            isLoaded ? (
                <PostItemAPI2 martin={post}/>
            ) :
                (
                    <Loader />
            )
    }
   
    </div>
  )
  
}

export default ContentAPIHooks2