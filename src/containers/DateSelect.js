import { connect } from 'react-redux';
import {
  setDate,
  loadEpisodes,
  getCurrentDay,
  getCurrentMonth,
} from '../store/ducks/dates';
import DateSelect from '../components/DateSelect';

function mapStateToProps(state) {
  return {
    currentDay: getCurrentDay(state),
    currentMonth: getCurrentMonth(state),
  };
}

const mapDispatchToProps = {
  setDate,
  loadEpisodes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateSelect);
