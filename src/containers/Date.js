import { connect } from 'react-redux';
import URI from 'urijs';
import isEmpty from 'lodash/isEmpty';
import { getIsLoading, getDate } from '../store/ducks/dates';
import DateComponent from '../components/Date';
import { monthNumberToName } from '../utils/dates';

function mapStateToProps(state, { location: { search } }) {
  const { month, day } = URI.parseQuery(search);
  const date = getDate(state, { monthName: monthNumberToName(month), day });

  return {
    isLoading: isEmpty(date) && getIsLoading(state),
    date,
  };
}

export default connect(mapStateToProps)(DateComponent);
