import React , { Component } from 'react';
import '../css/style.css' ;
import { AppBar, MuiThemeProvider, TextField, RaisedButton } from '@material-ui/core';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';




class FormUserPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }   
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }    


   


    render(){
        const { values, handleChange } = this.props;
     return (
        <MuiThemeProvider >
        <React.Fragment>
            <div class="dot-container">
                <span className="dot" style={{ backgroundColor: "#18d26e"}}></span>
                <span className="dot" style={{ backgroundColor: "#18d26e"}}></span>
                <span className="dot"></span>
            </div>
         
            <TextField style = {{ marginTop:"20px",marginLeft:"50px",width:"300px"}}
              id="date"
              label="Date de Naissance"
              type="date"
              defaultValue={values.date_of_birth}
              onChange={handleChange('date_of_birth')}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            
            <FormControl style = {{ marginTop:"10px",marginLeft:"50px",width:"300px"}}>
              <InputLabel>Address</InputLabel>
              <Input style = {{ marginTop:"25px"}}
                type='text'
                defaultValue={values.address}
                onChange={handleChange('address')}
                required
              />
           </FormControl>
            <br />

            <FormControl style = {{ marginTop:"10px",marginLeft:"50px",width:"300px"}}>
              <InputLabel>Ville</InputLabel>
              <Input style = {{ marginTop:"25px"}}
                type='text'
                defaultValue={values.city}
                onChange={handleChange('city')}
                required
              />
           </FormControl>
            <br />

            <FormControl style = {{ marginTop:"10px",marginLeft:"50px",width:"300px"}}>
              <InputLabel>Code Postal</InputLabel>
              <Input style = {{ marginTop:"25px"}}
                type='text'
                defaultValue={values.zip_code}
                onChange={handleChange('zip_code')}
                required
              />
           </FormControl>
            <br />

            <FormControl style = {{ marginTop:"10px",marginLeft:"50px",width:"300px", marginBottom:"25px"}}>
              <InputLabel>Téléphone</InputLabel>
              <Input style = {{ marginTop:"25px"}}
                type='text'
                defaultValue={values.phone}
                onChange={handleChange('phone')}
                required
              />
           </FormControl>

            

            <br />

            
              

           
            <div class="d-flex flex-row bd-highlight mb-3" style={{ marginLeft:"50px"}}>
                    <div class="p-2 bd-highlight">
                    <Button style = {{ fontWeight:"bold"}}
                      color="primary"
                      variant="contained"
                      onClick={this.back}
                >Retour</Button>

                    </div>
                    <div class="p-2 bd-highlight">
                    <Button style = {{fontWeight:"bold"}}
                      color="primary"
                      variant="contained"
                      onClick={this.continue}
                >Suivant</Button>

            </div>
                
            </div>
            

           
          
        </React.Fragment>
      </MuiThemeProvider>
     );

        
    }
}
  
export default FormUserPersonalDetails;
