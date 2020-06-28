import React,{ Component } from 'react';
import {Modal, Row, Col} from 'react-bootstrap';

class ActionModal extends Component{
    render(){
        return(
            <div className="container" >
            <Modal size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered>

            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"style={{padding:'40px',marginLeft:"90px",fontSize:"40px"}}>Action Name</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Row >
                  <Col sm={6}>
                <h1>hello</h1>

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
    export default ActionModal ;