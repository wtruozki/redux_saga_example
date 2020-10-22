import React from 'react';
import UserForm from '../UserForm/container';
import UserList from '../UserList';
import styles from "./App.module.css"

const App = ({users}) =>{
  return (
      <div className={styles.container}>
          <UserForm/>    
          <UserList users={users.items}/>
      </div>
  );
}

export default App 