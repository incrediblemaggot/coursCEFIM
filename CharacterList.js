import React, {Component} from 'react'
import {Character} from "./Character";

export class CharacterList extends Component{

    renderNameAndImage() {
        let items = [];

        for (let character of this.props.characterList) {
            items.push(
                <Character  key={character.id} character={character}/>
            )
        }

        return items;
    }

    render(){
        return <div>{this.renderNameAndImage()}</div>
    }

}