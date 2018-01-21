import { connect } from 'react-redux';
import {
  setDate,
  getDay,
  getMonth,
} from '../store/ducks/dates';
import DateSelect from '../components/DateSelect';
import { loadEpisodes } from '../store/ducks/episodes';

function mapStateToProps(state) {
  return {
    day: getDay(state),
    month: getMonth(state),
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
