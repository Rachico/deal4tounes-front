import React , { Component } from 'react';
import ActionList from './ActionList';
import SearchBox from './SearchBox';



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
        <h1>Chargement...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Liste des actions</h1>
                    <SearchBox searchChange ={this.onSearchChange}/>
                    
                    <ActionList actions={filteredActions}/>
                    
                </div>
            );


        

        
    }
}
  
export default ActionsContainer;