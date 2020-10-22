import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UserForm = ({createUser}) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });
  
const {firstName, lastName} = values
  const onChange = (e) =>setValues({...values, [e.target.name]: e.target.value})
  const onSubmit = e => {
    e.preventDefault();
    createUser(values);
  };


  return (
    <Form onSubmit={onSubmit}>
    <FormGroup>
        <Label>
            First name
        </Label>
        <Input required type="text" name="firstName" value={firstName} onChange={onChange} />
    </FormGroup>
    <FormGroup>
        <Label>
            Last name
        </Label>
        <Input required type="text" name="lastName" value={lastName} onChange={onChange} />
    </FormGroup>
    <FormGroup>
        <Button block outline type="submit" color="primary">
            Create
        </Button>
    </FormGroup>
</Form>
  )
}

export default UserForm
