
export const rickApiRootUrl = 'https://rickandmortyapi.com/api';

export const get = (url) =>
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(
                    new Error('Something went wrong.')
                );
            }
        });