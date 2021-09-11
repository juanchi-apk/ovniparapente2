import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import Image from "react-bootstrap/Image";  

const Ovnicarrousel = ({items})=>{

    const StyledCarousel = withStyles({
        root: {
          color: 'white',
          width:"100vw",
    
         
        },
      })(Carousel);

      return (
          <div>
        <StyledCarousel
        
        autoplay
        animation="slide"> 
                {items.map((item,i)=>{ return (
                   <div className="photo_container"> 
                   <Image 
                   style={{
                        width: "100vw",
                        }}
                    src={item} 
                    alt={`mainpic${1}`}/>
                    
                   </div>
                    )
                    })
                }
        </StyledCarousel>
        </div>
      )
}

export default Ovnicarrousel;