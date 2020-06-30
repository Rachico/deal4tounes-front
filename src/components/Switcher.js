import React,{ Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormUserPersonalDetails from './FormUserPersonalDetails';
import FormUserPassword from './FormUserPassword';


class Switcher extends Component {
 
  
    render(){
        switch(this.props.step){
            case 1 : 
              return(
                <FormUserDetails 
                  nextStep = {this.props.nextStep}
                  handleChange = {this.props.handleChange}
                  values = {this.props.values}
                />
              );

            case 2 : 
            return (
              <FormUserPersonalDetails 
              nextStep = {this.props.nextStep}
              prevStep = {this.props.prevStep}
              handleChange = {this.props.handleChange}
              values = {this.props.values}
              />
            );

            case 3 : 
            return (
              <FormUserPassword
              nextStep = {this.props.nextStep}
              prevStep = {this.props.prevStep}
              handleClickShowPassword = {this.props.handleClickShowPassword}
              handleMouseDownPassword = {this.props.handleMouseDownPassword}
              handleChange = {this.props.handleChange}
              values = {this.props.values}
              showPassword = {this.props.showPassword}
              />
             
            );
            default :
            return( console.log("default case"));
            
          }
        
    }
}   
export default Switcher ;