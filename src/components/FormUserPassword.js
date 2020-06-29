import React , { Component } from 'react';
import '../css/style.css' ;

import {Button} from 'react-bootstrap';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';




class FormUserPassword extends Component {
   
    
      
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }   
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
   
    render(){

        const { values, handleChange, handleClickShowPassword, handleMouseDownPassword } = this.props;
     return (
        
        
        <React.Fragment>

        <div class="dot-container">
                <span className="dot" style={{ backgroundColor: "#18d26e"}}></span>
                <span className="dot" style={{ backgroundColor: "#18d26e"}}></span>
                <span className="dot" style={{ backgroundColor: "#18d26e"}}></span>
            </div>

            
            <FormControl style = {{ marginTop:"20px",marginLeft:"50px",width:"300px"}}>
          <InputLabel>Mot de passe</InputLabel>
          <Input style = {{ marginTop:"25px"}}
            id="standard-adornment-password"
            type={this.props.showPassword ? 'text' : 'password'}
            defaultValue={values.password}
            onChange={handleChange('password')}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton style={{ marginBottom:"10px"}}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {this.props.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
           </FormControl>

            <br /> 

            <FormControl style = {{ marginTop:"30px",marginLeft:"50px",width:"300px",marginBottom:"30px"}}>
          <InputLabel>Confirmer mot de passe</InputLabel>
          <Input style = {{ marginTop:"25px"}}
            id="standard-adornment-password"
            type={this.props.showPassword ? 'text' : 'password'}
            defaultValue={values.password}
            onChange={handleChange('password')}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton style={{ marginBottom:"10px"}}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {this.props.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
           </FormControl>

        
            
            <div class="d-flex flex-row bd-highlight mb-3" style={{ marginLeft:"40px"}}>
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
                      type="submit"
                >Confirmer</Button>

            </div>
            </div>
            
          
        </React.Fragment>
      
    
        
     )

        
    }
}
  
export default FormUserPassword;