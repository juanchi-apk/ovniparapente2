import React from "react";
import "./aula.scss";
import ContactForm from "../ContactForm/ContactForm";
import {useMedia} from 'react-use';
import Fade from 'react-reveal/Fade';
import { withStyles } from '@material-ui/core/styles';
import { Button, Link } from "@material-ui/core";





const AulaCont = ()=> {

    const isWide = useMedia('(min-width: 600px)');
    const isMobile =useMedia('(max-width: 599px)');

    const StyledButtoninst = withStyles({
        root: {
          background: 'transparent',
          borderRadius: 3,
          border: "2px solid #2c2c2c ",
          color: '#2c2c2c',
          fontWeight: "700",
          fontFamily: "Montserrat",
          height: 48,
          padding: '0 30px',
          marginTop: '50px',
    
          '&:hover': {
            color: "#42f934",
            border: "2px solid #42f934 ",
    
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
          marginTop: '50px',
          marginBottom: '50px',
          '&:hover': {
            color: "#42f934",   
            textDecoration: "none",

    
          },
    
    
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Link);

      
    return (
    <div>
        {isWide&& (
        <div className = "curso_container">
       
        <Fade> 
        <div className = "curso_section">

       

            <h1 className ="curso_title">AULA EXPERIMENTAL</h1>
            <div className="curso_text"><p>Nesta aula experimental, você terá a primeira interação com o esporte e irá se familiarizando com os conceitos básicos do voo livre.</p>
            <p>Conforme a direção do vento no dia do treino será programada a atividade, podendo variar entre interação com o parapente nas dunas, técnicas de inflagem na praia, simulador de voo (força G, pouso e decolagem) e controle de vela no chão.</p>
            <p>Neste momento que será compartilhado com o instrutor e os monitores da escola, você 
            poderá tirar todas as dúvidas que surgirem e sairá com uma noção básica dos módulos 
            que serão estudados durante o curso.</p>
           </div>
           <StyledLink href='https://landing.mailerlite.com/webforms/landing/e3t7o9' target='_blank'><StyledButtoninst>ACESSE A AULA</StyledButtoninst></StyledLink>
        </div>

        
        </Fade> 
       
        <ContactForm/>

                
    </div>
        )}
       
        {isMobile &&(
            <div className = "curso_container">

            <Fade>
            <div className = "mobile_curso_section">
                <h1 className ="mobile_curso_title">AULA EXPERIMENTAL</h1>
                <div className="mobile_curso_text">
                <p>Nesta aula experimental, você terá a primeira interação com o esporte e irá se familiarizando com os conceitos básicos do voo livre.</p>
            <p>Conforme a direção do vento no dia do treino será programada a atividade, podendo variar entre interação com o parapente nas dunas, técnicas de inflagem na praia, simulador de voo (força G, pouso e decolagem) e controle de vela no chão.</p>
            <p>Neste momento que será compartilhado com o instrutor e os monitores da escola, você 
            poderá tirar todas as dúvidas que surgirem e sairá com uma noção básica dos módulos 
            que serão estudados durante o curso.</p>
                </div>

                <StyledLink href='https://landing.mailerlite.com/webforms/landing/e3t7o9' target='_blank'><StyledButtoninst>ACESSE A AULA</StyledButtoninst></StyledLink>
            </div>
            </Fade>
                
            <ContactForm/>
            
         </div>    
        )}

    </div>
    )
}

export default AulaCont