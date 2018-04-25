import {Component} from "react";
import {get} from "../utils/http";

export class AbstractListPage extends Component {
    state = {
        info: {},
        list: [],
    };

    componentWillMount() {
        this.getData(this.baseUrl);
    }

    nextPage = () => {
        this.getData(this.state.info.next);
    };
    previousPage = () => {
        this.getData(this.state.info.prev);
    };

    getData(url) {
        get(url)
            .then((result) => this.setState({
                info: result.info,
                list: result.results
            }));
    }

    searchName = (name) => {
        this.getData(`${this.baseUrl}?name=${name}`)
    };

}