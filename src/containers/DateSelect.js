import { connect } from 'react-redux';
import {
  setDate,
  getDay,
  getMonth,
} from '../store/ducks/dates';
import DateSelect from '../components/DateSelect';

function mapStateToProps(state) {
  return {
    day: getDay(state),
    month: getMonth(state),
  };
}

const mapDispatchToProps = {
  setDate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateSelect);
