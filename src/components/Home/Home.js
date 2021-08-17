import React from "react";
import "./home.scss";
import Image from "react-bootstrap/Image";  
import {Button, Link} from "@material-ui/core";
import Image1 from "../../Images/slide1.jpg";
import Image2 from "../../Images/slide2.jpg";
import InstImage from "../../Images/logodetalle.png"    
import { withStyles } from '@material-ui/core/styles';
import ImageGallery from "../ImageGallery/ImageGallery";
import UserForm from "../ContactForm/ContactForm";
import ProductCards from "../Cards/Cards"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Carousel from 'react-material-ui-carousel';
import WhatsappContainer from '../Whatsapp/Whatsapp'



//import Image3 from "../../Images/slide3.jpg "


      
   
const Home =  ()  => {

  const items= [
    Image1,
    Image2,
    
    
]

  const StyledCarousel = withStyles({
    root: {
      color: 'white',
      width:"100vw",

     
    },
  })(Carousel);

  const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #0ed600 30%, #8fe06f 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      '&:hover' :{
        background: "transparent",
        color: "#0ed600", 
        border: "1px solid #0ed600 ",
      },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  const StyledButtongreen = withStyles({
    root: {
      background: 'linear-gradient(45deg, #0b0c13 30%, #383838 100%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      '&:hover' :{
        background: "transparent",
        color: "#383838",
        border: "1px solid #0b0c13 ",

      },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  const StyledButtoninst = withStyles({
    root: {
      background: 'transparent',
      borderRadius: 3,
      border: "1px solid #0ed600 ",
      color: '#0ed600',
      height: 48,
      padding: '0 30px',
      marginTop:'50px',     

      '&:hover' :{  
        background: "#0ed600",
        color: "white",
        border: "1px solid white ",

      },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  const StyledLink = withStyles({
    root: {
      background: 'transparent',
      color: 'rgb(224, 224, 224)',
      height: 48,
      padding: '0 30px',
      marginTop:'50px',
      '&:hover' :{  
        color: "#42f934",

      },     

     
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Link);

  return (
        <div>
          
         <div className ="carousel">
          <div  className = "instBanner">
          <h1 className = "instBanner_tittle">OVNI PARAPENTE</h1>
          <h2 className = "instBanner_subtittle" >FLORIPA</h2>
          <p className = "instBanner_phrase">Realizando Sohnos</p>
          <div className = "instBanner_social">
          <StyledLink href="https://www.facebook.com/ovniparapente/" target="_blank"><FacebookIcon className="fa fa-plus-circle" style={{ fontSize: 60 }}/></StyledLink>
          <StyledLink href="https://www.instagram.com/ovniparapenteoficial/" target="_blank" ><InstagramIcon className="fa fa-plus-circle" style={{ fontSize: 60 }} /></StyledLink>
          <StyledLink href="https://www.youtube.com/channel/UC8Dh9C_NI5boCxO5NLik0vQ/" target="_blank"   ><YouTubeIcon className="fa fa-plus-circle" style={{ fontSize: 60 }} /></StyledLink>
          </div>
          </div> 
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


        <div className="inst"> 
        <div className = "institem">
          <h1 className= "inst_tittle">O.V.N.I. ESCOLA DE PARAPENTE</h1>
         
            <div className= "inst_text">
               Mais de 25 anos de experiencia em vôos duplo, cursos e venda de equipamentos no Brasil e no mundo. Oferecemos Cursos Para Pilotos Nível 1, 2 e 3. Voo Duplo Instrucional, Voo de Paramotor, Propaganda Aérea, Equipamentos entre outros serviços. Com instrutor experiente e habilitado pela CBVL (Confederação Brasileira de Voo Livre).
            </div>
            <div>
            <Link href="/about" ><StyledButtoninst variant="outlined">SABER MAS</StyledButtoninst></Link>
            </div>
          </div>  
          <div>
          
             <img src={InstImage} />

          </div>
        </div>

        <div className = "sliderform">
        <div className="sliderform_slider">
        <ImageGallery></ImageGallery>
        </div>
        <div className = "sliderform_form">
          <UserForm></UserForm>
          </div>
        </div>
        
        <div className = "productCardContainer" >
        <ProductCards/>
        </div>
              

        <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: "10.7%",
            width: "80%",
            height: "80%"
          }}
          title="instvideo"
          src="https://www.youtube.com/embed/kgL1UfBLGoc?rel=0"
          frameBorder="0"
        />


      </div>
      
      
      
        </div>
  
    )

};

export default Home;
