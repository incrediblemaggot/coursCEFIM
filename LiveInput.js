import React, {Component} from 'react';

export class LiveInput extends Component {
    state = {
        text: ''
    };

    update = (event) => {
        this.setState({
            text: event.target.value.toUpperCase()
        })
    };

    render() {
        return <div>
            <label htmlFor="live-input">Mettre en majuscule : </label>
            <input type="text"
                   id="live-input"
                   onInput={this.update}
                   value={this.state.text}
            />
            <p>{this.state.text}</p>
        </div>
    }
};