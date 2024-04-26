import React, { Component } from 'react'
import css from './css/Content.module.css'
import item from '../posts.json'
import ConstChild from './ConstChild'

export class Cont extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
    }
  render() {
    return (
      <div>
        <div className={css.TitleBar}>
            <h1>My Photos </h1>
        </div>
        <div className={css.SearchResults}>
            {
                item.savedPosts.map(test => {
                    return <ConstChild test={test} />
                    
                })
            }
        </div>
      </div>
    )
  }
}

export default Cont