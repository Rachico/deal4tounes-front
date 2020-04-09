import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard';
import {articles} from '../const_test/articles_test' ;
import ContactUs from '../components/ContactUs';
import DemoCarousel from '../components/DemoCarousel';



export default class ThePageOfArticles extends Component {

render(){
    const  cardcom =articles.map((user,i)=>{
        return <ReviewCard id={articles[i].id} AvatarImage={articles[i].AvatarImage} title={articles[i].title} subheader={articles[i].subheader}  image ={articles[i].image} Typography={articles[i].Typography} TypographyParagraph={articles[i].TypographyParagraph}  moreIcon={articles[i].moreIcon}/>
    })
  
    
    return(
        <div>
<div className= "image">
<div className="site_title">

    <p style={{ color :'#fff',  fontFamily:"Open Sans",padding:'-30px',fontSize:"40px"}}> L'espace des articles </p>
    <p> Puisque la lecture, une porte ouverte sur un monde enchanté,on vous fournit cet espace qui vous donne l'opportunité de consulter des articles écologiques et humanitaires. </p>
</div>

<div className="overlay" >

</div>
</div>
<div  style={{backgroundColor:'rgba(180, 255, 170, 0.822)' }} >
{cardcom}
<div className="car"  style={{padding:"70px"}}>
<DemoCarousel/>
</div>
</div>


<ContactUs/>
</div>

) ;
}

}