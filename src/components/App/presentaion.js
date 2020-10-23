import React,{useEffect} from 'react';
import UserForm from '../UserForm/container';
import UserList from '../UserList';

import {Alert} from "reactstrap"
import styles from "./App.module.css"


const App = ({users, usersError ,getUsers}) =>{
  
  const closeAlert = () =>{
    usersError({
      error: ""
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
      <div className={styles.container}>
          <Alert color="danger" isOpen={!!users.error} toggle={closeAlert}>
              {users.error}
          </Alert>
          <UserForm/>    
          <UserList users={users.items}/>
      </div>
  );
}

export default App 