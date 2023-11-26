import { Component } from 'react'
import CardContainer from '../card-container/CardContainer'


class CardList extends Component {
render() {
    const {filteredMonsters} = this.props
    
    return(
        filteredMonsters.map((m) => {  
            return(
            <CardContainer monster={m}/>
            )
        }
    ))
}}

export default CardList