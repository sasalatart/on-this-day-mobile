import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';
import NavBar from '../components/NavBar';

const mapDispatchToProps = {
  goBack,
};

export default connect(
  null,
  mapDispatchToProps,
)(NavBar);
