import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={2}
      showControls={true}
      showIndicators={false}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="p-3 w-100"
              src= {require("../img/PageOfArticles/handscute2.png")}
              alt="First slide"
            />
          <MDBMask overlay="green-light" />
          </MDBView>
          <MDBCarouselCaption>
        
            <h2 className="h2-responsive"style={{fontFamily:"Open Sans",marginTop:"50px"}} >Vous avez un article enrichissant que vous voulez partager avec nous ?</h2>
          
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="p-3 w-100"
              src={require("../img/PageOfArticles/help.png")}
              alt="Second slide"
            />
          <MDBMask overlay="green-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Alors contactez-nous dans la zone de contactez nous pour que vous vous bénéficiez d'une visibilité et pour que vous partagez vos expériences avec nous !</h3>
        
          </MDBCarouselCaption>
        </MDBCarouselItem>
       
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;