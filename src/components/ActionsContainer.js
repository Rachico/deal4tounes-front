import React , { Component } from 'react';
import ActionList from './ActionList';
import SearchBox from './SearchBox';
import '../css/style.css' ;

import '../css/style.css' ;



class ActionsContainer extends Component {

    constructor() {
        super();
        this.state = {
            actions : [],
            searchfield: ''  
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => this.setState({ actions: posts}))
        
    }
    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value});
    }


    render(){
        const { actions, searchfield } = this.state;
        const filteredActions = actions.filter(action =>{
            return action.title.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !actions.length ?
        <h1 className='tc pv5'>Chargement...</h1> :
            (
                
                <div className='tc pv5' style={{fontFamily:"Open Sans",color:"black"}}>
                    <h1 className='f1' style={{fontFamily:"Open Sans",color:"black"}}>Liste des actions</h1>
                    <SearchBox searchChange ={this.onSearchChange} style={{fontFamily:"Open Sans",color:"black"}}/>
                    
                    <ActionList actions={filteredActions} style={{fontFamily:"Open Sans",color:"black"}}/>
                    
                </div>
            );


        

        
    }
}
  
export default ActionsContainer;