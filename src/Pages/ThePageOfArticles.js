import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard';
import {articles} from '../const_test/articles_test' ;







export default class ThePageOfArticles extends Component {

render(){
    const  cardcom =articles.map((user,i)=>{
        return <ReviewCard id={articles[i].id} avatar={articles[i].Avatar} title={articles[i].title} subheader={articles[i].subheader}  image ={articles[i].image} Typography={articles[i].Typography}/>
    })
  
    
    return(
        <div>
<div className= "image">
<div className="site_title">

    <h1> L'espace des articles </h1>
    <p> cet espace vous donne l'opportunité de consulter des articles et de partager vos experiences avec nous  </p>
</div>

<div className="overlay" >

</div>
</div>
<div  style={{backgroundColor:'rgba(180, 255, 170, 0.822)' }} >
{cardcom}


</div>
</div>

) ;
}

}