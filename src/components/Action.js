import React , {Component} from 'react';
import ActionModal from './ActionModal.js';

class Action extends Component{
    constructor(props){
        super(props);
        this.state ={deps:[], addModalShow : false, editModalShow : false}
    }
    
    render(){
        let addModalClose =() => this.setState({addModalShow:false});
        return(

        <div className='row flex tc bg-light dib br3 pa3 ma5 grow bw shadow-1 '>
            

            <div class='row'>
            <div class='col-4 img-responsive'>
                
                <img alt ='action_image' style={{height:"200px",width:"200px"}}/>
            </div>
            <div class='col-8'>
                <h1>title</h1>
                <p>body</p> 
                <a onClick={()=> this.setState({addModalShow: true})}>&#10132;plus de détails</a> 
                <ActionModal
            show={this.state.addModalShow}
            onHide={addModalClose}
            />
                </div> 
            </div>
        
        </div>
    );}
  }
  
  export default Action;