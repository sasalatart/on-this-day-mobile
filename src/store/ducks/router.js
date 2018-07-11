import { push } from 'connected-react-router';
import URI from 'urijs';

export const ROUTES = {
  DATE_SELECT: '/',
  DATE: '/date',
};

export function goToDate(month, day) {
  return push({
    pathname: ROUTES.DATE,
    search: URI.buildQuery({ month, day }),
  });
}
