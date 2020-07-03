import React, {useState} from "react";
import { GoogleMap, withScriptjs , withGoogleMap , Marker, InfoWindow} from "react-google-maps";
import '../css/style.css';

import Action from './Action.js';
import CommentGroup from './Comments/CommentGroup.js';
import MapStyles from './MapStyles.js';

import Geocode from "react-geocode";

function Map({address}){
    const [selectedMarker , setSelectedMarker] = useState(null);
    


    Geocode.fromAddress({address}).then(
        response => {
          const {lat, lng } = response.results[0].geometry.location;
          
        });
    return(


<GoogleMap 
defaultZoom={12} 
defaultCenter={{lat: 36.806496 , lng: 10.181532}}
defaultOptions={{styles : MapStyles}}
>


<Marker 
position={{lat:36.806496, lng: 10.181532 }}
onClick = { () => {setSelectedMarker(true);}}

/>

{selectedMarker && (
<InfoWindow
position = {{
    lat:36.842428 , lng: -349.803886
}}
onCloseClick={ () => setSelectedMarker(null)}
>
  <div>
   <Action />

      
  </div>  
</InfoWindow>
)}




</ GoogleMap>


    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


function Localisation (){
    return (
    <div id="Espace_actions">
    <center>
    <h2 className='f1' style={{fontFamily:"Open Sans",color:"black", marginTop:'20px'}}>Actions</h2>
    <h3 style={{ fontFamily:"Open Sans"}}>Cliquez sur les pins afin de consulter les actions</h3>
    <div style={{width : '80vw' , height: '80vh', marginBottom:'40px', marginTop:'40px'}}>
    <WrappedMap 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBa7iaXmn9zAdEaOFfmQAcK6dlz5nfQ3X8`}
    loadingElement={<div style={{height:'100%'}}/>}
    containerElement={<div style={{height:'100%'}}/>}
    mapElement={<div style={{height:'100%'}}/>}

    />
    </div>
    </center>
    </div> 
    );

}
export default Localisation;
