import React from 'react'
import styles from "./ListItem.module.css"
import {Button} from "reactstrap"

const ListItem = ({user,onDeleteClick}) => {
  return (
    <div className={styles.container}>
    <div className={styles.name}>
        {user.firstName} {user.lastName}
    </div>
    <div className={styles.btn}>
        <Button size="sm" color="danger" outline onClick={() => onDeleteClick(user.id)}>
            Delete
        </Button>
    </div>
</div>
  )
}

export default ListItem
