import App from "./presentaion"
import {connect} from 'react-redux';
import {getUsersRequest, usersError} from '../../store/users/action';

const mapStateToProps = (state) =>({users: state.users})
const mapDispatchToProps = (dispatch) =>({
  getUsers:() => dispatch(getUsersRequest()),
  usersError:(error) => dispatch(usersError(error))
})



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);