import axios from 'axios';
import React, { useState, useEffect} from 'react'
import API_KEY from '../secrets.js'






function ContentAPIHooks2() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setPost] = useState([]);
    // const [savedPosts, setSavedPosts] = useState([]);


    //Fetch image function that is called once when the page loads.
    useEffect(() => {
        fetchImages()
    }, []);

    const fetchImages = async () => {
        const res = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100&safesearch=true&editors_choice=true&orientation=horizontal`);
        const returnPosts = res.data.hits;
        setIsLoaded(true);
        // setSavedPosts(returnPosts);
        setPost(returnPosts);
        console.log(returnPosts)
    }



  return(
    <div>
        {post.map((itemzz) => (
                <div>
                    <img src={itemzz.previewURL} alt="Image" /> {/* Adjusted property name based on Pixabay API documentation */}
                    <h3>{itemzz.user}</h3> {/* Example of accessing properties, adjust according to actual data structure */}
                </div>
            ))}
   
    </div>
  )
  
}

export default ContentAPIHooks2