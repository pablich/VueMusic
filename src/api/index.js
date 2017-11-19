import Config from './config';

const {apiKey} = Config;
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`;
const URL_COUNTRIES = `https://restcountries.eu/rest/v2/all`;

function getContries(){
    return fetch(URL_COUNTRIES)
    .then(res => res.json())
    .then(json => json)
};

function getArtists(country){
    const _url = URL.replace(':country', country)
    return fetch(_url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
};
export { getContries, getArtists }