import axios from 'axios'
import React, { Component } from 'react'

export class HTTPPostTest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null
      }
    }
    
    

    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
            {
                title: 'Hello',
                body: 'It works',
                userId: 123,
            }
        ).then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }



    render() {
        const {apiResponse} = this.state;
        return (
          <div>
            <button onClick={this.postToApi}>
                Post
            </button>
            {
              apiResponse ? (
                <div>
                  <h1>{apiResponse.title}</h1>
                  <p>{apiResponse.body}</p>
                  <p>{apiResponse.id}</p>
                  <p>{apiResponse.userId}</p>
                </div>
              ) : (
                <p>Please Click the Button Above</p>
              )
            }
    
          </div>
        )
      }
    }
export default HTTPPostTest