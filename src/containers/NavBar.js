import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';
import NavBar from '../components/NavBar';

const mapDispatchToProps = {
  goBack,
};

export default connect(
  null,
  mapDispatchToProps,
)(NavBar);
