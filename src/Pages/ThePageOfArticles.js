import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard';
import ContactUs from '../components/ContactUs';
import DemoCarousel from '../components/DemoCarousel';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import axios from 'axios';
import { articles } from '../const_test/articles_test';

export default class ThePageOfArticles extends Component {

constructor() {
    super();
    this.state = {
        articles : [],
        searchfield: '' ,
       
    }
   

}

componentDidMount(){
 
 let x= localStorage.getItem('store');


  fetch(`http://127.0.0.1:8000/api/auth/article`,{
    method:"GET",
headers:{
    Authorization :`Bearer ${x}`
}
}).then(response =>{return response.json();
}).then(users=>{this.setState({articles:users.Articles})
   

});


}

onSearchChange = (event) => {
    this.setState({searchfield:event.target.value});   
}




render(){  
    const { articles, searchfield } = this.state
    const filteredArticles = articles.filter(articles =>{
 return articles.Typography.toLowerCase().includes(searchfield.toLowerCase());

})
  
        
   
    
    return(
        <div>
<div className= "image">
<div className="site_title">

    <p style={{ color :'#fff',  fontFamily:"Open Sans",padding:'-30px',fontSize:"40px"}}> L'espace des articles </p>
    <p> Puisque la lecture est une porte ouverte sur un monde enchanté,on vous fournit cet espace qui vous donne l'opportunité de consulter des articles écologiques et humanitaires. </p>
</div>

<div className="overlay" >

</div>
</div>
<div  className='tc'  style={{backgroundColor:'rgba(180, 255, 170, 0.822)' }} >
<SearchBox  placeholder='rechercher un article' searchChange ={this.onSearchChange} style={{fontFamily:"Open Sans",color:"black",}}/>
<CardList articles={filteredArticles}/>
<div className="car"  style={{padding:"70px"}}>
<DemoCarousel/>
</div>
</div>


<ContactUs/>
</div>

) ;
}

}