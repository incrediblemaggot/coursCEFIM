import React, {Component} from 'react';
import './App.css';


class App extends Component {
    state = {
        weather: null,
        location: 'Tours'
    };


    componentWillMount() {
        this.getData(this.state.location)
    };

    getData = () => {
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.location + '&appid=941b9aa3466642077e44fc4d6fefbd08';

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                weather: data,
            }));
    };

    changeLocation = (event) => {
        this.setState({
            location: event.target.value
        })
    };

    render() {
        return <div className="App">
            {
                this.state.weather
                    ? <div>
                        <h1>{this.state.weather.name} {this.state.weather.sys.country}</h1>
                        <p>Temperature: {(this.state.weather.main.temp - 273.15).toFixed(1)}°C</p>
                        <p>Sky: {this.state.weather.weather[0].description}</p>
                        <input type="text" onInput={this.changeLocation}/>
                        <button onClick={this.getData}>Change Location</button>
                    </div>
                    : "Loading..."
            }
        </div>;
    }
}

export default App;
