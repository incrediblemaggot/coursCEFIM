import React, {Component} from 'react';
import './App.css';
import {CharacterList} from "./CharacterList";

class App extends Component {
    state = {
        info: {},
        characterList: [],
        filter:  {
            page : 1,
            gender : null
        },
    };

    componentWillMount() {
        this.getData(this.state.filter.page,this.state.filter.gender);
    };

    getData(page, gender) {
        let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
        if(gender) {
            url+= `&gender=${gender}`
        }

        fetch(url)
            .then((response) => response.json())
            .then((result) => this.setState({
                info: result.info,
                characterList: result.results,
                filter : {
                    gender : gender,
                    page:page
                }
            }))
    };

    nextPage() {
        this.getData(this.state.filter.page+1,this.state.filter.gender);
    };

    previousPage() {
        this.getData(this.state.filter.page-1,this.state.filter.gender);
    };

    goToOnePage() {
        const pages = [];
        const count = parseInt(this.state.info.pages);

        for (let page = 1; page <= count; page++) {
            pages.push(
                <button onClick={() => this.getData(page,this.state.filter.gender)}>{page}</button>
            );
        };

        return pages;
    }

    filterByGender(){
        const filter = [];
        filter.push(
            <button onClick={() => this.getData(1, 'female')}>Female</button>,
            <button onClick={() => this.getData(1, 'male')}>Male</button>,
            <button onClick={() => this.getData(1, 'genderless')}>Genderless</button>,
            <button onClick={() => this.getData(1, 'unknown')}>Unknown</button>,
            <button onClick={() => this.getData(this.state.url)}>All</button>
        );
        return filter;

    }

    render() {
        return (
            <div className="App">
                <button className='Previous-Page' onClick={() => this.previousPage()}>Previous</button>
                {this.goToOnePage()}
                <button className="Next-Page" onClick={() => this.nextPage()}>Next</button>
                {this.filterByGender()}
                <CharacterList characterList={this.state.characterList}/>
            </div>
        );
    }
}

export default App;
