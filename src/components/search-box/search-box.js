import React, { Component } from 'react'
import './search-box.styles.css'

export class SearchBox extends Component {
  render() {
    const { onSearchChange } = this.props
    return (
        <input className={`search-box $this.props.className}`} placeholder='Search Monsters' type="text" onChange={onSearchChange}/>
    )
  }
}

export default SearchBox