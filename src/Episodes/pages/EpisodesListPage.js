import React from "react";
import {Link} from "react-router-dom";
import {rickApiRootUrl} from "../../utils/http";
import {Pagination} from "../../components/Pagination";
import {AbstractListPage} from "../../components/AbstractListPage";

export class EpisodesListPage extends AbstractListPage {
    baseUrl = `${rickApiRootUrl}/episode/`;

    render() {
        const {
            info: {
                prev,
                next,
                pages
            },
            list,
        } = this.state;
        return <div>
            <h1>Episodes</h1>

            <Pagination
                pages={pages}
                hasNextPage={!next}
                hasPrevPage={!prev}
                onGoPrevious={this.previousPage}
                onGoNext={this.nextPage}
                onSearchName={this.searchName}
            />

            {
                list.map((episode) =>
                    <Link
                        to={'/episodes/' + episode.id}
                        key={episode.id}
                    >
                        <p>{episode.episode} - {episode.name}</p>
                    </Link>
                )
            }
        </div>;
    }
}