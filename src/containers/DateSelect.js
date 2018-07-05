import { connect } from 'react-redux';
import { loadEpisodes } from '../store/ducks/dates';
import DateSelect from '../components/DateSelect';

const mapDispatchToProps = {
  loadEpisodes,
};

export default connect(
  null,
  mapDispatchToProps,
)(DateSelect);
