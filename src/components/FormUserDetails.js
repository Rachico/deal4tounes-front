import React , { Component } from 'react';
import '../css/style.css' ;

import { Button} from 'react-bootstrap';

import FormControl from '@material-ui/core/FormControl';

import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';



class FormUserDetails extends Component {
   
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }    

    render(){
        const { values, handleChange } = this.props;
     return (
        
      
        <React.Fragment>
        <div className="dot-container">
                <span className="dot" style={{ backgroundColor: "#18d26e"}}></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
         
            <FormControl style = {{ marginTop:"20px",marginLeft:"50px",width:"300px"}}>
          <InputLabel>Nom complet</InputLabel>
          <Input style = {{ marginTop:"25px"}}
            type='text'
            defaultValue={values.name}
            onChange={handleChange('name')}
            required
           
          />
           </FormControl>

            <br /> 
            
            <FormControl style = {{ marginTop:"30px",marginLeft:"50px",width:"300px",marginBottom:"25px"}}>
          <InputLabel>Email</InputLabel>
          <Input style = {{ marginTop:"25px"}}
            type='email'
            defaultValue={values.email}
            onChange={handleChange('email')}
            required
           
          />
           </FormControl>
           
           
            
            <br />
            <Button style = {{ marginTop:"10px",marginLeft:"300px",fontWeight:"bold"}}
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Suivant</Button>

        
          
        </React.Fragment>
   
    
        
     )

        
    }
}
  
export default FormUserDetails;

/*

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
                </Form.Group>
                */