import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useFormFields } from "../libs/hooksLib";
import {Typography, Grid, Container} from '@material-ui/core';
import "./Login.css";

export default function Login({users, setUser }) {
  const history = useHistory();
  console.log(users)
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: ''
  })

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  function handleSubmit(event, users) {
    event.preventDefault();
    console.log(users)
    const found = users.find( user => user.userEmail === fields.email)
    console.log(found)
    if (found){
      setUser(found)
      return history.push('/main_container')
    }else{
      return history.push('/signup')
    }
  }

  return (
      <>
        <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
            <div style={{display: 'inline-block'}}>
              <Container maxWidth="sm">
                <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
                    Welcome to Music-To-YOU
                </Typography>
                <Typography variant='h5' align='center' color="textSecondary" caption>
                  Hello music fans and welcome to MTU! Your one stop shop for everything music related
                </Typography>
                </Container>
            </div>
            
          
      <div className="Login">
        <Form onSubmit={event => handleSubmit(event, users )}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              placeholder="Rick Astly"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder='Never Gonna Give...'
              value={fields.password}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
      </Grid>
      </>
  );
}
