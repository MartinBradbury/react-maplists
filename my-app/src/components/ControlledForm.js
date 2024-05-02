import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         category: "Website",
         comments: ""
      }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value,
        });
    };

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }






  render() {
    return (
      <div>
        <h2>Please Fill Out the Form Below</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="id-name">Your Name:</label>
                <input
                    value={this.state.name}
                    onChange={this.handleNameChange} 
                    id="id-name" name="name" 
                    type="text"/>
            </div>
            <div>
                <select 
                    htmlFor="id-category" 
                    name="category"
                    value={this.state.category}
                    onChange={this.handleCategoryChange}
                >
                    <option value="Website">Website Issue</option>
                    <option value="Order">Order Issue</option>
                    <option value="General">General Issue</option>
                </select>
            </div>
            <div>
                <label htmlFor="id-comments">Comments:</label>
                <textarea 
                    id="id-comments" 
                    name="comments" 
                    value={this.state.comments} 
                    onChange={this.handleCommentChange}
                />
            </div>

            <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }
}

export default ControlledForm