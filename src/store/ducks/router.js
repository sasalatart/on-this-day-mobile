import { push } from 'react-router-redux';
import URI from 'urijs';

const ROUTES = {
  DATE_SELECT: '/',
  DATE: '/date',
};

export function goToDate(month, day) {
  return push({
    pathname: ROUTES.DATE,
    search: URI.buildQuery({ month, day }),
  });
}

export function goToDateSelect() {
  return push(ROUTES.DATE_SELECT);
}
