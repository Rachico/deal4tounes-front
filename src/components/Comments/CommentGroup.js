import React,{ Component } from 'react';

import CommentAdd from './CommentAdd';
import CommentExample from './CommentExample';
import axios from 'axios';
class CommentGroup extends Component{
constructor(props){
    super(props);
//let arrUrl=window.location.href.split('/');
//let actionId =arrUrl[arrUrl.length - 1];
    this.state={
    comments:[
        {id:1,body:'this is my first comment'},
        {id:2,body: 'this is my second comment'}
    ],
  //  actionId : actionId 
}

//console.log('actionId',actionId);
 this.handleCommentSubmit=this.handleCommentSubmit.bind(this);
}
    handleCommentSubmit(data){
    const postData ={
        comment :data,

  //      actionId:this.state.actionId
    };
    axios.post('http://127.0.0.1:8000/api/auth/comment',postData).then(response =>{
        console.log('response',response.data);
        let comments =this.state.comments;
       comments.unshift({
          // id:response.data.id,
          id: comments.length +1, 
          body:response.data.comment
          // body:response.data.body
       });
       this.setState({comments:comments})
    })
    }
renderComments(){
    const {comments}=this.state;
   return comments.map(comment =>{
        const {id,body}=comment;
        return(
            <CommentExample key={id} body={body}/>
            
        );
    })
}
render(){
    return(
    <div>
  {this.renderComments()}
   <CommentAdd handleCommentSubmit={this.handleCommentSubmit}/>     
    </div>);
}



}
export default CommentGroup;