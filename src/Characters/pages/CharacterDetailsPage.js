import React, {Component} from "react";
import {get} from "../../utils/http";

export class CharacterDetailsPage extends Component {
    state = {
        character: null,
    };

    componentWillMount() {
        const characterId = this.props.match.params.id;
        get('https://rickandmortyapi.com/api/character/' + characterId)
            .then((result) => this.setState({
                character: result
            }));
    }

    render() {
        return this.state.character != null
            ? <div>
                <h1>{this.state.character.name}</h1>
            </div>
            : <p>Loading...</p>;
    }
}