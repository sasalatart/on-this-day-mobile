import { connect } from 'react-redux';
import { goToDateSelect } from '../store/ducks/router';
import { getIsLoading } from '../store/ducks/dates';
import DateComponent from '../components/Date';

function mapStateToProps(state) {
  return {
    isLoading: getIsLoading(state),
  };
}

const mapDispatchToProps = {
  goToDateSelect,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateComponent);
