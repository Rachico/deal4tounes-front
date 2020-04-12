import React , { Component } from "react";
import CommentForm from './CommentForm';
import CommentList from './CommentList';
class CommentReady extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        comments: [],
        loading: false
      };
      this.addComment = this.addComment.bind(this);
    }
    addComment(comment) {
      this.setState({
        loading: false,
        comments: [comment, ...this.state.comments]
      });
    }
  
    render() {
     
      return (
        <div class="row">
        <div class="col-md-3">
            
     <div className="App container bg-light shadow">
     
              {/* Comment List Component */}
              <CommentList loading={this.state.loading}
              comments={this.state.comments}
               />
            
              <h6>Say something about this action</h6>
              {/* Comment Form Component */}
              <CommentForm addComment={this.addComment}/>
         </div>
              </div>
        </div>
      );
    }
  }
  
  export default CommentReady;