import React,{ Component } from 'react';
import axios from 'axios';
import Switcher from './Switcher';
import {Modal, Row, Col} from 'react-bootstrap';



class AddModel extends Component{
  constructor(props){
    super(props);  
    
    this.state={
      step:1,
      showPassword:false,
      name:'',
      email:'',
      password:'',
      address:'',
      city:'',
      zip_code:'',
      date_of_birth:'',
      phone:'',
      password_confirmation:'',
      
    }

  }

  handleChange = input=> e => {
    this.setState({ 
      [input]: e.target.value 
    });
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    });
  }

  
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1 
    });
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state
    this.setState({ showPassword: !showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleSubmit = event => {
    
        console.log('done');
        event.preventDefault();
       console.log(this.state.name);
       console.log(this.state.email);
       console.log(this.state.password);
       console.log(this.state.date_of_birth);
       console.log(this.state.address);
       console.log(this.state.city);
       console.log(this.state.zip_code);
       console.log(this.state.phone);
        
       axios.post(`http://127.0.0.1:8000/api/auth/register`, {   

            name: this.state.name,
            email: this.state.email,
            password : this.state.password,
            date_of_birth: this.state.date_of_birth,
            address: this.state.address,
            city: this.state.city,
            zip_code:this.state.zip_code,
            phone: this.state.phone,
            

          }).then(response => { 
              console.log(response)
            }).catch(errors => {
                  console.log(errors)
            });
  }
      
        render(){
          
          const { step } = this.state;
          const { showPassword } = this.state;
          const { name, email, address, city, zip_code, date_of_birth, phone, password, password_confirmation } = this.state;
          const values = { name, email, address, city, zip_code, date_of_birth, phone, password, password_confirmation };
          
          return(
            <div className="container" >
              <Modal {...this.props} size="md" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter"  
                  style={{
                  padding:'5px',
                  height:"50px",
                  marginLeft:"80px",
                  fontSize:"30px",
                  fontFamily:"Open Sans",
                  fontWeight:"bold"
                  }}>
                    Créer votre compte
                  </Modal.Title>
                </Modal.Header>

           <Modal.Body style={{marginLeft:"30px",fontFamily:"Open Sans",fontSize:"18px",height:"500px"}}>
              <Row >
                  <Col sm={6}>
                        <form action="" method="post" role="form" onSubmit={this.handleSubmit}>
                        <Switcher 
                          step = {step}
                          showPassword = {showPassword}
                          nextStep = {this.nextStep}
                          prevStep = {this.prevStep}
                          handleChange = {this.handleChange}
                          handleClickShowPassword = {this.handleClickShowPassword}
                          handleMouseDownPassword = {this.handleMouseDownPassword}
                          values = {values}
                        />
                        </form>
                    </Col>
              </Row>
          </Modal.Body>

              </Modal>


              </div>
          
          );
        }


  }
  export default AddModel ;

  /*
  <Switcher 
                    step = {step}
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                  />
                  
                  */
