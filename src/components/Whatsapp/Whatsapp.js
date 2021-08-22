import React from 'react';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {Link} from "@material-ui/core";
import "./whatsapp.scss";
import {withStyles} from '@material-ui/core/styles';
import {useMedia} from 'react-use';

const WhatsappContainer = () =>{
  const isWide = useMedia('(min-width: 600px)');
  const isMobile =useMedia('(max-width: 599px)');

  const StyledLink = withStyles({
    root: {
      background: 'transparent',
      color:"#8ef0a5",
      height: 48,
      maxWidth:"50vw",
      padding: '0 30px',
      marginTop:'50px',
      '&:hover' :{  
        color: "#00bb2d",
        textDecoration:"none",
        

      },     

     
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Link);

  return(
    <div>
    {isWide&& (
    <div className="whatsapp_fixed">
    <StyledLink href="https://api.whatsapp.com/send?phone=554899858393&text=Ol%C3%A1,%20gostaria%20de%20consultar%20sobre%20alguns%20produtos%20/%20servi%C3%A7os%20que%20vi%20em%20seu%20site" target="_blank">
  <div className="whatsapp_container" >
  
  <div className ="whatsapp_cta">
  AGENDE SEU VÔO HOJE E SINTA O PRAZER DE VOAR ENTRE AS NUVENS!
  </div>  
    <WhatsAppIcon style={{ fontSize: 80 }}/> 
   
    </div>
    </StyledLink> 
    </div>
  )}
  {isMobile && (
    <div className="mobile_whatsapp_fixed">
    <StyledLink href="https://api.whatsapp.com/send?phone=554899858393&text=Ol%C3%A1,%20gostaria%20de%20consultar%20sobre%20alguns%20produtos%20/%20servi%C3%A7os%20que%20vi%20em%20seu%20site" target="_blank">
  <div className="mobile_whatsapp_container" >
  
  <div className ="mobile_whatsapp_cta">
  AGENDE SEU VÔO HOJE E SINTA O PRAZER DE VOAR ENTRE AS NUVENS!
  </div>  
    <WhatsAppIcon style={{ fontSize: 30 }}/> 
   
    </div>
    </StyledLink> 
    </div>)}

  </div>
  )}
  
export default WhatsappContainer;   
