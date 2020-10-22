import UserForm from "./presentation"
import {connect} from 'react-redux';
import {createUserRequest} from '../../store/users/action';

const mapStateToProps = (state) =>({users: state.users})
const mapDispatchToProps = (dispatch) => ({
  createUser: (userValues) =>
    dispatch(createUserRequest(userValues))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserForm);