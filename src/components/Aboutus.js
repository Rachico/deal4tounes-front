import React,{ Component } from 'react';
import photo1 from '../img/photo1.png';
import photo2 from '../img/photo2.png';
import photo3 from '../img/photo3.png';

class Aboutus extends Component {

render(){
    return (
        
  <section id="aboutus" class="section-bg wow fadeInUp">
  <div class="container">

    <div class="section-header">
      <h3>Qui sommes-nous</h3>
      <p>il a toujours été important pour nous de mieux comprendre notre empreinte écologique et sociale afin de réduire et de compenser notre impact.</p>
      <p>Nous nous sommes donc réunis, 4 élèves ingénieurs en informatique, afin d'oeuvrer pour une bonne cause et vous inciter à nous rejoindre.</p>
      <p>Notre responsabilité se traduit par 3 engagements principaux:</p>
      <center>
        <ul style={{display:'flex!important',justifycontent: 'center!important'}}>
        <li style={{display:'inline-block'}}><img style={{height:'200px',weight:'200px'}} src={photo1}/><p>Aider à la gestion durable des ressources</p></li>
        <li style={{display:'inline-block'}}><img style={{height:'200px',weight:'200px'}} src={photo2}/><p>Réduire la pauvreté</p></li>
        <li style={{display:'inline-block'}}><img style={{height:'200px',weight:'200px'}} src={photo3}/><p>Promouvoir le développement humain</p></li>
      </ul>
      </center>
    </div>
</div>
</section>
    )
}




}
export default Aboutus ;