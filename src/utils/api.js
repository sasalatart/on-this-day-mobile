import URI from 'urijs';

const BASE_URL = 'https://onthisdaynext.salatart.com/api';

function getRequest(url) {
  return fetch(url).then(response => response.json());
}

function loadEpisodes(month, day) {
  return getRequest(URI(`${BASE_URL}/episodes`).query({ month, day }).toString());
}

export default {
  loadEpisodes,
};
