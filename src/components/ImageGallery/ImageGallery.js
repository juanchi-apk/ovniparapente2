import React from "react";
import "./imagegallery.scss";
import Carousel from 'react-material-ui-carousel'




const ImageGallery = ()=>{

    var items = [
        "https://www.youtube.com/embed/TMukDzQKl1U" ,
        "https://www.youtube.com/embed/acQOV2tiW1g",
        "https://www.youtube.com/embed/TbWN2D1b1bE",
        "https://www.youtube.com/embed/uRvifis1Y_g",
        "https://www.youtube.com/embed/u9FZ3f4lxtw",
        "https://www.youtube.com/embed/-YwV_t0KQwc"];
    
    
    return(

        <div className ="photogallery">   
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
    
    )

}

export default ImageGallery;


        