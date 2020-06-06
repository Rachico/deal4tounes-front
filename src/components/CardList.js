import React from 'react';
import ReviewCard from './ReviewCard';


const CardList=({ articles }) => {
    
   const cardcomp= articles.map((user, i) => {
       
    return(
                           
        <ReviewCard 
        key={i} 
         id={articles[i].id} 
        avatar={articles[i].avatar} 
        title={articles[i].title} 
        subheader={articles[i].subheader} 
         content_image ={articles[i].content_image} 
         Typography={articles[i].Typography} 
         TypographyParagraph={articles[i].TypographyParagraph} 
          moreIcon={articles[i].moreIcon}/>

);
})

    return(
        <div>
       {console.log("hhhhhh")}
        
            {
               cardcomp 
                    
            }
            {console.log("gggg")}
        </div>
    );

}
  
  export default CardList;