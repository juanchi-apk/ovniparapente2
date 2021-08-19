import React from "react";
import "./imagegallery.scss";
import Carousel from 'react-material-ui-carousel';
import { withStyles } from '@material-ui/core/styles';
import {useMedia} from 'react-use';






const ImageGallery = ()=>{

    var items = [
        "https://www.youtube.com/embed/TMukDzQKl1U" ,
        "https://www.youtube.com/embed/acQOV2tiW1g",
        "https://www.youtube.com/embed/TbWN2D1b1bE",
        "https://www.youtube.com/embed/uRvifis1Y_g",
        "https://www.youtube.com/embed/u9FZ3f4lxtw",
        "https://www.youtube.com/embed/-YwV_t0KQwc"];

        const isWide = useMedia('(min-width: 600px)');
        const isMobile =useMedia('(max-width: 599px)');
        const StyledGallery= withStyles({
            root: {
              color: 'white',
              width:"100vw",
              padding:"20px 0px",
              margin: "0px 0px",
              
        
             
            },
          })(Carousel);
    
    
    return(
        <div>
        {isWide && (<div className ="photogallery">   
        <Carousel> 
                {items.map((item,i)=>{ return (
                <div className="photogallery_item">

<iframe 
width="560" 
height="315" 
title={`video${i}`} 
frameBorder="0" 
src = {item}
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowFullScreen ={false}></iframe>
                    
                </div>)})}
        </Carousel>
        </div>
    
    )}
    {isMobile && (
       <StyledGallery>
        {items.map((item,i)=>{ return (
            <div className="mobile_gallery"> 
                <iframe style ={{width:"100%"}} src={item} type="video/mp4" frameBorder="0"></iframe>
            </div>

            )}
        )}
        </StyledGallery>
    
    )}
    </div>
    )
}

export default ImageGallery;


        