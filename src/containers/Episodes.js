import { connect } from 'react-redux';
import { goToDateSelect } from '../store/ducks/router';
import Episodes from '../components/Episodes';

const mapDispatchToProps = {
  goToDateSelect,
};

export default connect(
  null,
  mapDispatchToProps,
)(Episodes);
