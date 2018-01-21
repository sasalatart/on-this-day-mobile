import { connect } from 'react-redux';
import {
  setDate,
  getDay,
  getMonth,
} from '../store/ducks/dates';
import DateSelect from '../components/DateSelect';
import { goToEpisodes } from '../store/ducks/router';

function mapStateToProps(state) {
  return {
    day: getDay(state),
    month: getMonth(state),
  };
}

const mapDispatchToProps = {
  setDate,
  goToEpisodes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateSelect);
