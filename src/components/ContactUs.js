import React,{ Component } from 'react';
import axios from 'axios';


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
        
  <section id="contact" className="section-bg wow fadeInUp">
  <div className="container"  style={{fontFamily:"Open Sans"}}>

    <div className="section-header">
      <h3  style={{fontFamily:"Open Sans"}}>Contactez nous</h3>
      <form action="" method="post" role="form" className="contactForm" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" name="name" className="form-control" id="name" placeholder="Nom complet" 
            data-rule="minlen:4" data-msg="Please enter at least 4 chars" required
            value={this.state.name} onChange={this.handleChange}
            />
            <div className="validation"></div>
          </div>
          <div className="form-group col-md-6">
            <input type="email" className="form-control" name="email" id="email" placeholder="email" 
            data-rule="email" data-msg="Please enter a valid email" required
            value={this.state.email} onChange={this.handleChange}
            />
            <div className="validation"></div>
          </div>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="subject" id="subject" placeholder="Objet" 
          data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required
          value={this.state.subject} onChange={this.handleChange} 
          />
          <div className="validation"></div>
        </div>
        <div className="form-group">
          <textarea className="form-control" name="message" rows="5" data-rule="required" required
          data-msg="Please write something for us" placeholder="Message"
          value={this.state.message} onChange={this.handleChange} ></textarea>
          <div className="validation"></div>
        </div>
        <div className="text-center"> <button type="submit" className="btn btn-outline-dark" onClick={this.handleClick}>Envoyer</button></div>
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