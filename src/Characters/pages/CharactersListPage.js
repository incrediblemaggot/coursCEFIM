import React from "react";
import "./CharactersListPage.css";
import {Link} from "react-router-dom";
import {rickApiRootUrl} from "../../utils/http";
import {Pagination} from "../../components/Pagination";
import {AbstractListPage} from "../../components/AbstractListPage";



export class CharactersListPage extends AbstractListPage {
    baseUrl = `${rickApiRootUrl}/character/`;

    render() {
        const {
            info: {
                prev,
                next,
                pages
            },
            list,
        } = this.state;
        return <div className="CharactersListPage">
            <h1>Characters</h1>
            <Pagination
                pages={pages}
                hasNextPage={!next}
                hasPrevPage={!prev}
                onGoPrevious={this.previousPage}
                onGoNext={this.nextPage}
                onSearchName={this.searchName}
            />
            {
                list.map((character) =>
                    <Link
                        to={'/characters/' + character.id}
                        key={character.id}
                        className="CharactersListPage-item"
                    >
                        <img src={character.image} alt=""/>
                        <p>{character.name}</p>
                    </Link>)
            }
        </div>;
    }
}