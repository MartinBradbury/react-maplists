import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: []
      }
    }

    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
            title: 'Hello',
            body: 'It Works',
            userId: 123,
        }
    
    ).then(response => console.log(response))
    }



  render() {
    return (
      <div>
        <button onClick={this.postToApi}>
            Post
        </button>

      </div>
    )
  }
}

export default HTTPPost