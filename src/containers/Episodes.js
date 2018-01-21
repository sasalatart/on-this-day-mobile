import { connect } from 'react-redux';
import { goToDateSelect } from '../store/ducks/router';
import { getIsLoading } from '../store/ducks/episodes';
import Episodes from '../components/Episodes';

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
)(Episodes);
