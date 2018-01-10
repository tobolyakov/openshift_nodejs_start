import { connect } from 'react-redux';

// IMPORT YOUR REACT COMPONENT
import App from '../components/App';
import UserActions from '../actions/userActions';

const mapStateToProps = (state, ownProps) => {
  return {
      users: state.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUsers: () => {
      dispatch( UserActions.getUsers() );
    }
  };
};

const TestComp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default TestComp;
