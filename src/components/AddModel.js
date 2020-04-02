import React,{ Component } from 'react';

import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

class AddModel extends Component{
  constructor(props){
      super(props);  
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
          <Modal.Title id="contained-modal-title-vcenter" style={{padding:'40px'}}>S'inscrire</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row >
              <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="Name">
              <Form.Label> Nom</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                required
                placeholder="Nom d'utilisateur"
               />
               <Form.Label> Adresse éléctronique</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                placeholder="Adresse E-mail"
               />
               <Form.Label> Mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                placeholder="Mot de passe"
               />
               <Form.Label>Confirmer votre mot de passe</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                placeholder="Mot de passe"
               />
              </Form.Group>

              <Form.Group>
                  <Button type="submit" class="btn btn-outline-dark" style={{backgroundColor:"#18d26e"}}>
                  Confirmer
                  </Button>
              </Form.Group>
              </Form>
              </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
        <button type="button" class="btn btn-outline-dark" onClick={this.props.onHide}>Fermer</button>
        </Modal.Footer>
      </Modal>

          </div>
          
          
          );
      
        }


  }
  export default AddModel ;