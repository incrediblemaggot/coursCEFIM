import React from "react";
import {Link} from "react-router-dom";
import {rickApiRootUrl} from "../../utils/http";
import {Pagination} from "../../components/Pagination";
import {AbstractListPage} from "../../components/AbstractListPage";

export class LocationsListPage extends AbstractListPage {
    baseUrl = `${rickApiRootUrl}/location/`;

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
            <h1>Locations</h1>

            <Pagination
                pages={pages}
                hasNextPage={!next}
                hasPrevPage={!prev}
                onGoPrevious={this.previousPage}
                onGoNext={this.nextPage}
                onSearchName={this.searchName}
            />

            {
                list.map((location) =>
                    <Link
                        to={'/locations/' + location.id}
                        key={'location-' + location.id}
                    >
                        <p>{location.name}</p>
                    </Link>
                )
            }
        </div>;
    }
}