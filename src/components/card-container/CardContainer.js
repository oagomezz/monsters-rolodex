import React, { Component } from 'react'
import './Card.css'

export class CardContainer extends Component {
render() {
const { name, id, website, email } = this.props.monster
    return (
        <div key={id} className='card-container'>
        <img alt='monster' src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h1>{name}</h1>
        <h3>{email}</h3>
        <p>{website}</p>
        </div> 
    )
}}

export default CardContainer