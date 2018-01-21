import { push } from 'react-router-redux';

const ROUTES = {
  DATE_SELECT: '/',
  EPISODES: '/episodes',
};

export function goToEpisodes() {
  return push(ROUTES.EPISODES);
}

export function goToDateSelect() {
  return push(ROUTES.DATE_SELECT);
}
