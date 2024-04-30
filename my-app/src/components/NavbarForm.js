import React, { Component } from 'react'
import css from './css/NavBarSimple.module.css';
import NavBar from './NavBar';

export class NavbarForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
         isLoggedIn: true,
      }
    }

    myClickIn = () => {
        this.setState({
            isLoggedIn: false,
        })
    }

    myClickOut = () => {
        this.setState({
            isLoggedIn: true,
        })
    }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>Gallery</h1>
        <NavBar 
            isLoggedIn={this.state.isLoggedIn}
            myClickIn={this.myClickIn}
            myClickOut={this.myClickOut}
        />
      </div>
    )
  }
}

export default NavbarForm