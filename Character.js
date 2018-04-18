import React, {Component} from 'react'


export class Character extends Component {
    render() {
        return <div>
            <p>{this.props.character.name}</p>
            <img src={this.props.character.image}/>
        </div>
    }
}