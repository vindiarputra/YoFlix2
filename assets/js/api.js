'use strict';

const api_key = 'f072fe0ee41c5eb462eae627ae52632e'
const imageBaseURL = 'https://image.tmdb.org/t/p/'

const fetchDataFromServer = function(url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer};