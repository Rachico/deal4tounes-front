import React,{ Component } from 'react';
import axios from 'axios';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

class AddModel extends Component{
  constructor(props){
      super(props);  
    }
    state={
      name:'',
      email:'',
      password:'',
      password_confirmation:'',
      errorMessageemail: '',
      
    }

   
    firsthandler = (event) => {
      this.setState({
          name: event.target.value
      })
  }
  emailhandler = (event) => {
      this.setState({
          email: event.target.value
      })
  }
  passwordhandler = (event) => {
      this.setState({
          password: event.target.value
      })
  }

  passwordconfirmhandler = (event) => {
      this.setState({
        password_confirmation: event.target.value
      })
  }

  handleSubmit = event => {
    event.preventDefault();


    axios.post(`http://127.0.0.1:8000/api/register`, {   
          name: this.state.name,
        email: this.state.email,
        password : this.state.password,
        password_confirmation: this.state.password_confirmation})
        .then(response => { 
          console.log(response)
        })
        .catch(error => {
          if ( error.response.data.errors.hasOwnProperty("email") ) 
        { this.setState({errorMessageemail:error.response.data.errors.email[0]});
        console.log(error.response.data.errors.email[0])
          }  if ( error.response.data.errors.hasOwnProperty("password") ) 
          {this.setState({errorMessagepassword:error.response.data.errors.password[0]});
          console.log(error.response.data.errors.password[0])
          }
          this.setState({name:""})
          this.setState({email:""})
          this.setState({password:""})
      this.setState({password_confirmation:""})
      
      setTimeout(function() { //Start the timer
        this.setState({errorMessagepassword:""})
        this.setState({errorMessageemail:""})  //After 1 second, set render to true
    }.bind(this), 3000) 


      });
      }
      
        render(){
          return(
            <div className="container" >
              <Modal
            {...this.props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter"style={{padding:'40px',marginLeft:"90px",fontSize:"40px"}}>Inscription</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row >
                  <Col sm={6}>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Name">
                  <Form.Label> <strong>Nom complet</strong></Form.Label>
                  <Form.Control style={{ width:"400px"}}
                    type="text"
                    name="name"
                    value={this.state.name} onChange={this.firsthandler}
                    required
                    placeholder=""
                  />
                  <Form.Label><strong> email</strong></Form.Label>
                  <Form.Control style={{ width:"400px"}}
                    type="email"
                    name="email"
                    value={this.state.email} onChange={this.emailhandler}
                    required
                    placeholder=""
                  />
                  { this.state.errorMessageemail &&
      <h12 style={{color:"red"}} > { this.state.errorMessageemail } <br></br> </h12> }
                  <Form.Label><strong> Mot de passe</strong></Form.Label>
                  <Form.Control style={{ width:"400px"}}
                    type="password"
                    name="password"
                    value={this.state.password} onChange={this.passwordhandler}
                    required
                    placeholder=""
                  />
                  <Form.Label><strong>Confirmez votre mot de passe</strong></Form.Label>
                  <Form.Control style={{ width:"400px"}}
                    type="password"
                    name="password"
                    value={this.state.password_confirmation} onChange={this.passwordconfirmhandler}
                    required
                    placeholder=""
                  />
                  { this.state.errorMessagepassword &&
      <div style={{ frontSize:2, color:"red"}}> { this.state.errorMessagepassword} </div> }
                  </Form.Group>

                  <Form.Group>
                      <Button type="submit" className="btn btn-outline-dark"  style={{backgroundColor:"#18d26e"}}>
                      Confirmer
                      </Button>
                  </Form.Group>
                  </Form>
                  </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
            <button type="button" className="btn btn-outline-dark" onClick={this.props.onHide}>Fermer</button>
            </Modal.Footer>
          
          </Modal>

              </div>
              
              
              );
          
      }


  }
  export default AddModel ;