import React,{ Component } from 'react';

class ContactUs extends Component {

render(){
    return (
        
  <section id="contact" class="section-bg wow fadeInUp">
  <div class="container">

    <div class="section-header">
      <h3>Contactez nous</h3>
      <form action="" method="post" role="form" class="contactForm">
        <div class="form-row">
          <div class="form-group col-md-6">
            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div class="validation"></div>
          </div>
          <div class="form-group col-md-6">
            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
            <div class="validation"></div>
          </div>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
          <div class="validation"></div>
        </div>
        <div class="form-group">
          <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
          <div class="validation"></div>
        </div>
        <div class="text-center"> <button type="submit" class="btn btn-outline-dark">Envoyer</button></div>
      </form>

    </div>
</div>
</section>
    )
}




}
export default ContactUs ;