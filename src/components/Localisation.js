import React, {Component} from "react";
import '../css/style.css';

import Action from './Action.js';
import CommentGroup from './Comments/CommentGroup.js';
import MapStyles from './MapStyles.js';
import Axios from 'axios';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode";


 
export class Localisation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        action_title:[],
        action_body:[],
        addresses:[],
        
    };
  }
    

      
      
      
      componentDidMount(){
        //get action title and action body
          //Axios.get('http://localhost:8000/api/action/getActionByAddress',{

          //}).then(response => { 
          
         //   console.log(response)
          /*  this.setState({action_title:response});
            this.setState();
            this.setState({action_body:response});
            this.setState();
           
    
              }).catch(errors => {
                console.log(errors)
          }); */
        
          // get action address
          Axios.get('http://localhost:8000/api/action/list',{
      }).then(response =>{
        
        console.log(response);
        this.setState({addresses:response.data});
      }).catch(errors => {
        console.log(errors)
  });
}

      
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };


  render() {
    
    return (
    
      <div id="Espace_actions">
    <center>
    <h2 className='f1' style={{fontFamily:"Open Sans",color:"black", marginTop:'20px'}}>Actions</h2>
    <h3 style={{ fontFamily:"Open Sans"}}>Cliquez sur les pins afin de consulter les actions</h3>
    <div style={{width : '80vw' , height: '80vh', marginBottom:'40px', marginTop:'40px'}}>

      <Map style = {{
        width: '80vw',
        height: '80vh'
      }} google={this.props.google} zoom={12} initialCenter={{
        lat: 36.806496,
        lng: 10.181532
    }}
    onClick={this.onMapClicked}
      >
   {
           this.state.addresses.map(function(item, i){
            Geocode.fromAddress(item).then(
              response => {
                console.log(response);
                 let lattitude = response.results[0].geometry.location.lat;
                 let lngitude = response.results[0].geometry.location.lng;
                
                 console.log(lattitude,lngitude);
                
              });
             return <Marker  key={i}  />
           })
         }
        
             
    
 <InfoWindow 
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow} onCloseClick={this.onMapClicked}>
            <div>
              
            </div>
        </InfoWindow> 
      
      </Map>
      
      </div>
      </center>
      </div>
    
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBa7iaXmn9zAdEaOFfmQAcK6dlz5nfQ3X8")
})(Localisation);
