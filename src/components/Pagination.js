import React, {Component} from "react";


export class Pagination extends Component {
    onSearch = (event) => {
        event.preventDefault();

        const $form = event.target;
        const $nameField = $form.nameField;

        const name = $nameField.value;

        this.props.onSearchName(name);
    };

    render() {
        const {
            onGoPrevious,
            hasPrevPage,
            pages,
            onGoNext,
            hasNextPage
        } = this.props;

        return <div>
            <form onSubmit={this.onSearch}>
                <input type="text" name="nameField"/>
                <button>Rechercher</button>
            </form>

            <button
                onClick={onGoPrevious}
                disabled={hasPrevPage}
            >Précédent</button>
            {pages} pages
            <button
                onClick={onGoNext}
                disabled={hasNextPage}
            >Suivant</button>
        </div>
    }
}