import React from "react";
import image1 from "../../Images/cartaopresente.jpg";
import Image from 'react-bootstrap/Image';
import "./reservar.scss";
import {Button, Link} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import {useMedia} from 'react-use';
import ContactForm from "../ContactForm/ContactForm";






const Reservar = ()=>{
    const isWide = useMedia('(min-width: 600px)');
    const isMobile =useMedia('(max-width: 599px)');

    const MobileStyledButton = withStyles({
        root: {
          background: 'transparent',
          borderRadius: 3,
          border: "1px solid #0ed600 ",
          color: '#0ed600',
          height: 30,
          marginTop:'10px',     
     },
        label: {
          textTransform: 'capitalize',
          textDecoration: "none"
        },
      })(Button);

  
      const StyledButtonpresente = withStyles({
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
            textDecoration: "none",
            color: "#42f934",
            border: "2px solid #42f934 ",
    
          },
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);

      const StyledLinkpresente = withStyles({
        root: {
          background: 'transparent',
          color: 'rgb(224, 224, 224)',
          '&:hover' :{  
            color: "#42f934",
            textDecoration: "none"

    
          },     
    
         
        },
        label: {
          textTransform: 'capitalize',

        },
      })(Link);


    return(
        <div>
            {isWide &&(
            <div className = "cartaoRegaloContainer">
            
             <Image src={image1} fluid />
            
        
                <div className = "presente_section">
                <h1 className ="presente_title">CARTÃO PRESENTE</h1>
                <div className="presente_text">
                <p>Através do vale presente você tem a chance de proporcionar um momento único e cheio de emoções para alguém especial</p>
                </div>

                <h2>VALIDADE</h2>
                <p>O prazo de validade é de um ano, a partir da data da compra. </p>
                <h2>VOUCHER</h2>
                <p>Após a confirmação do pagamento, enviaremos um voucher personalizado com o nome da pessoa presenteada. O envio será pelo WhatsApp ou e-mail para o comprador ou para quem será homenageado.
                Com este VALE PRESENTE você conseguirá proporcionar, de um jeito muito original, uma experiência inesquecível para alguém especial. Afinal, as melhores coisas da vida não são coisas
                </p>
                 

                <div className = "presente_btn"><StyledLinkpresente href='https://api.whatsapp.com/send?phone=4899858392&text=%20%22QUERO%20UM%20VALE%20PRESENTE%22' target="_blank"><StyledButtonpresente>QUERO UM VALE PRESENTE</StyledButtonpresente></StyledLinkpresente></div>
                </div>
                
         
            
            <section>
            <ContactForm/>
            </section>
            </div>

        )}
        {isMobile && (
            <div className = "cartaoRegaloContainer">

        <Image src={image1} fluid />
      
        <div className = "mobile_presente_section">
            <h1 className ="mobile_presente_title">CARTÃO PRESENTE</h1>
            <div className="mobile_presente_text">
            <p>Através do vale presente você tem a chance de proporcionar um momento único e cheio de emoções para alguém especial</p>
            <div className = "presente_btn"><StyledLinkpresente href="https://api.whatsapp.com/send?phone=554899858393&text=Quero%20acessar%20o%20link%20do%20cupom%20de%20presente%20para%20um%20amigo" target="_blank"><MobileStyledButton>Clique aqui para acessar o cupom</MobileStyledButton></StyledLinkpresente></div>
            </div>
        </div>
        <ContactForm/>
        </div>)}
        </div>

        
        

    )

}

export default Reservar;