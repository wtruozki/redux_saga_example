import App from "./presentaion"
import {connect} from 'react-redux';
import {getUsersRequest} from '../../store/users/action';

const mapStateToProps = (state) =>({users: state.users})
const mapDispatchToProps = (dispatch) => dispatch(getUsersRequest())

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);