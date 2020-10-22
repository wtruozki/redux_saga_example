import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import ListItem from "../ListItem/container"
const UserList = ({users}) => {
    return (
        <ListGroup>
            {users.sort((a, b) => {
                if (a.firstName > b.firstName) {
                    return 1;
                } else if (a.firstName < b.firstName) {
                    return -1;
                } else if (a.lastName > b.lastName) {
                    return 1;
                } else if (a.lastName < b.lastName) {
                    return -1;
                }
                return 0;
            }).map((user) => {
                return (
                    <ListGroupItem key={user.id}>
                      <ListItem user={user}/>
                        
                    </ListGroupItem>
                );
            })}
        </ListGroup>
    );
};

export default UserList;