import React from "react";
import "./home.scss";
import Image from "react-bootstrap/Image";  
import {Button, Link} from "@material-ui/core";
import Image1 from "../../Images/slide1.jpg";
import Image2 from "../../Images/slide2.jpg";
import InstImage from "../../Images/faviconOvni.png"    
import { withStyles } from '@material-ui/core/styles';
import ImageGallery from "../ImageGallery/ImageGallery";
import UserForm from "../ContactForm/ContactForm";
import MobileForm from "../MobileForm/MobileForm";
import MobileCards from "../MobileCards/MobileCards";
import ProductCards from "../Cards/Cards";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Carousel from 'react-material-ui-carousel';
import Faq from "../Faq/Faq";
import Location from '../Location/Location';
import {useMedia} from 'react-use';
import CBVL_logo from '../../Images/logo_cbvl.png';
import Testimonials from '../Testimonials/Testimonials';




//import Image3 from "../../Images/slide3.jpg "


      
   
const Home =  ()  => {

  const isWide = useMedia('(min-width: 600px)');
  const isMobile =useMedia('(max-width: 599px)');

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
  const StyledButtonaula = withStyles({
    root: {
      background: 'transparent',
      borderRadius: 3,
      border: "2px solid #0ed600 ",
      color: '#0ed600',
      height: 48,
      padding: '0 30px',
      marginTop:'50px',  
      fontWeight:"600"   ,

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
  const MobileStyledButtoninst = withStyles({
    root: {
      background: 'transparent',
      borderRadius: 3,
      border: "1px solid #0ed600 ",
      color: '#0ed600',
      height: 30,
      marginTop:'50px',     

     
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  const MobileStyledButtonaula = withStyles({
    root: {
      background: 'transparent',
      borderRadius: 3,
      border: "1px solid #0ed600 ",
      color: '#0ed600',
      height: 30,
      marginTop:'50px',     

     
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
    {isWide && (
        <div>
          <div className ="carousel">
          <div  className = "instBanner">
          <h1 className = "instBanner_tittle">OVNI PARAPENTE</h1>
          <h2 className = "instBanner_subtittle" >FLORIPA</h2>
          <p className = "instBanner_phrase">Realizando Sohnos desde 1994</p>
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
            <Image src={CBVL_logo} roundedCircle />
            <div>
            <Link href="/about" ><StyledButtoninst variant="outlined">SABER MAIS</StyledButtoninst></Link>
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
        <div className = "sliderform_form" id="mainform">
          <UserForm></UserForm>
          </div>
        </div>
          <div className = "productCardContainer" >
        <ProductCards/>
      

        </div>

        <div className="aulavirtual" id="aulacont">
        <div>O RESERVE SUA SALA DE AULA VIRTUAL GRATUITAMENTE</div>
        <p>Nesta aula virtual você poderá esclarecer todas as suas dúvidas ou preocupações que aparecem na hora de escolher uma escola para se formar como piloto de Parapente.</p> 
        <StyledLink href="https://landing.mailerlite.com/webforms/landing/e3t7o9" target= "_blank"><StyledButtonaula>AULA VIRTUAL</StyledButtonaula></StyledLink>
        </div>
          <div className ="testimonial_main_container">
          
          <Testimonials/>
          
          </div>
          <Location/>
          <Faq/>
        </div>
    )}
    {isMobile && (
        <div >
          <div className ="mobile_carousel">
        {/*  <div  className = "mobile_instBanner">
         <h1 className = "mobile_instBanner_tittle">OVNI PARAPENTE</h1>
         <h2 className = "mobile_instBanner_subtittle" >FLORIPA</h2>
         <p className = "mobile_instBanner_phrase">Realizando Sohnos</p>
         <div className = "mobile_instBanner_social">
         <StyledLink href="https://www.facebook.com/ovniparapente/" target="_blank"><FacebookIcon className="fa fa-plus-circle" style={{ fontSize: 60 }}/></StyledLink>
         <StyledLink href="https://www.instagram.com/ovniparapenteoficial/" target="_blank" ><InstagramIcon className="fa fa-plus-circle" style={{ fontSize: 60 }} /></StyledLink>
         <StyledLink href="https://www.youtube.com/channel/UC8Dh9C_NI5boCxO5NLik0vQ/" target="_blank"   ><YouTubeIcon className="fa fa-plus-circle" style={{ fontSize: 60 }} /></StyledLink>
         </div>
         </div>  */}
         <StyledCarousel
       
       autoplay
       animation="slide"> 
               {items.map((item,i)=>{ return (
                  <div className="photo_container"> 
                  <Image 
                  style={{
                       width: "100%",
                       }}
                   src={item} 
                   alt={`mainpic${1}`}/>
                   
                  </div>
                   )
                   })
               }
       </StyledCarousel>
       </div>      
          <div className="mobile_inst"> 
       <div className = "mobile_institem">
       <div style={{width:"80%"}}>
         
            <Image src={InstImage} fluid />

         </div>
         <h1 className= "mobile_inst_tittle">O.V.N.I. ESCOLA DE PARAPENTE</h1>
        
           <div className= "mobile_inst_text">
              Mais de 25 anos de experiencia em vôos duplo, cursos e venda de equipamentos no Brasil e no mundo. Oferecemos Cursos Para Pilotos Nível 1, 2 e 3. Voo Duplo Instrucional, Voo de Paramotor, Propaganda Aérea, Equipamentos entre outros serviços. Com instrutor experiente e habilitado pela CBVL (Confederação Brasileira de Voo Livre).
           </div>
           <Image src={CBVL_logo} thumbnail/>
           <div>
           <Link href="/about" ><MobileStyledButtoninst variant="outlined">SABER MAS</MobileStyledButtoninst></Link>
           </div>
         </div>  
         
       </div>
          <div className = "mobile_sliderform">
       <div className="sliderform_slider">
       
        <ImageGallery></ImageGallery>
      </div>
         <span id="mainform"><MobileForm></MobileForm></span>
       </div>
          <div className = "productCardContainer" >
       <MobileCards/>

       <div className="mobile_aulavirtual" id="aulacont">
        <div>O RESERVE SUA SALA DE AULA VIRTUAL GRATUITAMENTE</div>
        <StyledLink href="https://landing.mailerlite.com/webforms/landing/e3t7o9" target= "_blank"><MobileStyledButtoninst>AULA VIRTUAL</MobileStyledButtoninst></StyledLink>
        </div>
       </div>
       <div className ="testimonial_main_container">
          
       <Testimonials/>
       
       </div>
          <Location/>
          <Faq/>
          </div>
    )}

  </div>)
};

export default Home;
