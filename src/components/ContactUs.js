import React,{ Component } from 'react';
import axios from 'axios';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

class ContactUs extends Component {
  constructor(props){
    super(props);  
 
    this.state={
      name:'',
      email:'',
      subject:'',
      message:'',
      isDone:false
    }

    this.handleClick = this.handleClick.bind(this);
}


handleChange = e => {
  this.setState({ 
    [e.target.name]: e.target.value 
  });
}

handleClick(props) {
  this.setState({
    isDone: true
  })
}



handleSubmit = event => {

  event.preventDefault();

  axios.post(`http://127.0.0.1:8000/api/contact`, {   

      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,

    }).then(response => { 
        console.log(response)
      }).catch(errors => {
        console.log(errors)   
      });
  }

render(){
    return (
        
  <section id="contact" class="section-bg wow fadeInUp">
  <div class="container"  style={{fontFamily:"Open Sans"}}>

    <div class="section-header">
      <h3  style={{fontFamily:"Open Sans"}}>Contactez nous</h3>
      <form action="" method="post" role="form" class="contactForm" onSubmit={this.handleSubmit}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <input type="text" name="name" class="form-control" id="name" placeholder="Nom complet" 
            data-rule="minlen:4" data-msg="Please enter at least 4 chars" required
            value={this.state.name} onChange={this.handleChange}
            />
            <div class="validation"></div>
          </div>
          <div class="form-group col-md-6">
            <input type="email" class="form-control" name="email" id="email" placeholder="email" 
            data-rule="email" data-msg="Please enter a valid email" required
            value={this.state.email} onChange={this.handleChange}
            />
            <div class="validation"></div>
          </div>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" name="subject" id="subject" placeholder="Objet" 
          data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required
          value={this.state.subject} onChange={this.handleChange} 
          />
          <div class="validation"></div>
        </div>
        <div class="form-group">
          <textarea class="form-control" name="message" rows="5" data-rule="required" required
          data-msg="Please write something for us" placeholder="Message"
          value={this.state.message} onChange={this.handleChange} ></textarea>
          <div class="validation"></div>
        </div>
        <div class="text-center"> <button type="submit" class="btn btn-outline-dark" onClick={this.handleClick}>Envoyer</button></div>
        {this.state.isDone ? 
         <div style={{textAlign:"center", fontFamily:"Open Sans", fontWeight:"bold"}}>
          Envoyé !
         </div>
        : null}
    
      </form>

    </div>
</div>
</section>
    )
}


}
export default ContactUs ;