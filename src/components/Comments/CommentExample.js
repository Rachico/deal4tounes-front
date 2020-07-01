import React,{ Component } from 'react';

class CommentExample extends Component{

constructor(props){
  super(props);

}

    render(){
  const{body}=this.props;
  return(   
  
    <div>
  <div>
    <div className="media mb-3" style={{margin:"20px"}}>
      <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://api.adorable.io/avatars/48/EYA@adorable.io.png`}
        alt="EYA"
      />
 <div className="media-body p-2 shadow-sm rounded bg-light border">
 <small className="float-right text-muted">2hours ago</small>
 <h6 className="mt-0 mb-1 text-muted">Eya  </h6>
        {body} 
        </div>
       </div>
       </div>
        </div>)
    }
    
    
    
    }
    export default CommentExample;