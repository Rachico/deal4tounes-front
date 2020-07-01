  
import React, {useState} from 'react';

import {Button, Modal } from 'react-bootstrap';
import '../css/style.css';
import CommentGroup from './Comments/CommentGroup.js';

function Action({title, body, id}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className='row flex tc bg-white dib br3 pa3 ma4 grow bw shadow-1' style={{marginLeft:"50px",marginRight:"50px"}}>
            

            <div class='row'>
            <div class='col-4 img-responsive'>
                
                <img alt ='action_image' style={{height:"200px",width:"200px"}} src={`https://flathash.com/${id}`}/>
            </div>
            <div class='col-8'>
                <h2>{title}</h2>
                <p>{body}</p>  
                <Button variant="secondary" onClick={handleShow}>Participer</Button>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:'#18d26e'}}>
          <Modal.Title style={{color:'white'}}>Action title</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:'40px'}}>
        <div style={{display:'flex', justifyContent:'center', marginBottom: '20px'}}>
        <label style={{fontFamily:"Open Sans"}}>
                 Entrer le code d'activation
                <input type="text" name="name" />
        </label>
        
        <Button variant="primary">
            Confirmer
          </Button>
        </div> 


        <p style={{fontFamily:"Open Sans"}}>Partager votre expérience avec toute la communauté</p>
        <CommentGroup />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
                </div> 
            </div>
        
        </div>
    );
  }
  
  export default Action;