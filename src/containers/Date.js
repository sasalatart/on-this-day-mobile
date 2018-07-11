import { connect } from 'react-redux';
import { getIsLoading } from '../store/ducks/dates';
import DateComponent from '../components/Date';

function mapStateToProps(state) {
  return {
    isLoading: getIsLoading(state),
  };
}

export default connect(mapStateToProps)(DateComponent);
