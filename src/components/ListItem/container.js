import ListItem from "./presentation"
import {connect} from 'react-redux';
import {deleteUserRequest} from '../../store/users/action';

const mapStateToProps = (state) =>({users: state.users})
const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: (userId) =>
   dispatch(deleteUserRequest(userId))
 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListItem);