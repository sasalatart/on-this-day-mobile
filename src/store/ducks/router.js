import { push } from 'react-router-redux';

const ROUTES = {
  DATE_SELECT: '/',
  DATE: '/date',
};

export function goToDate() {
  return push(ROUTES.DATE);
}

export function goToDateSelect() {
  return push(ROUTES.DATE_SELECT);
}
