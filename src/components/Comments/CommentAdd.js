import React,{ useState } from 'react';

function CommentAdd(props){
const {handleCommentSubmit}=props;
//let comment="" ;
const [comment,setComment] =useState('');
return (
      
        <div class="row" >
        <div class="col-md-3">
        <div className='card mt-4 mb-3'  style={{margin:"20px"}}>
            <div className="card-header"><strong>comments</strong></div>
            <div className="card-body">
             <textarea name="comment" className="form-control" rows="1" placeholder="ajouter un commentaire" onChange={event=>setComment(event.target.value)} 
             value={comment} >
              
             </textarea>
          </div>
          </div>
          <div style={{margin:"20px"}}>
            <button className="btn btn-primary mr-3" onClick={event =>{
               handleCommentSubmit(comment);
            setComment('');
            }}>
               comment
            </button>
            <button className="btn btn-warning">close issue</button>
            </div>
             </div>
             </div>
            
             )
}
export default CommentAdd ;