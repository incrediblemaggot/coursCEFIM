import React, {Component} from "react";
import {get} from "../../utils/http";

export class EpisodeDetailsPage extends Component {
    state = {
        episode: null,
    };

    componentWillMount() {
        get('https://rickandmortyapi.com/api/episode/' + this.props.match.params.id)
            .then((data) => {
                this.setState({
                    episode: data,
                });
            });
    }


    render() {
        return this.state.episode != null
            ? <div>
                <h1>{this.state.episode.name}</h1>
            </div>
            : "Loading...";
    }
}