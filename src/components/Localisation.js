import React, {Component} from "react";
import '../css/style.css';

import Action from './Action.js';
import CommentGroup from './Comments/CommentGroup.js';
import MapStyles from './MapStyles.js';
import Axios from 'axios';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


 
export class Localisation extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        action_title:'',
        action_body:'',
      };

      componentDidMount(){
          Axios.get('http://localhost:8000/api/action/test_address_back',{

          }).then(response => { 
          
            console.log(response)
            //this.setState({action_title:response});
           
    
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
    
        <Marker onClick={this.onMarkerClick} position={{lat: 36.806496,
        lng: 10.181532}} />
 
 <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow} onCloseClick={this.onMapClicked}>
            <div>
              <Action />
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
})(Localisation)