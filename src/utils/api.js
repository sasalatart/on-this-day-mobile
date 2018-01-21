import axios from 'axios';
import URI from 'urijs';

axios.defaults.baseURL = 'https://onthisday.salatart.com/api';

function loadEpisodes(month, day) {
  const url = URI('/episodes').query({ month, day }).toString();
  return axios.get(url);
}

export default {
  loadEpisodes,
};
