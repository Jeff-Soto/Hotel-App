import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component {
  render(){
    return (
      <header className="header">
        <h1>Company Title</h1>
        <p>Company slogan or tagline</p>
      </header>
    )
  }
}
