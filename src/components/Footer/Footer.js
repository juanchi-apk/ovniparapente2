import React from 'react';
import  "./footer.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Link} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';



const Footer =  ()=>{
    
      const StyledLink = withStyles({
            root: {
              background: 'transparent',
              color: '#ffffff',
              '&:hover' :{  
                color: "#2c2c2c",
                textDecoration:"none",
              },
             
            },
            label: {
              textTransform: 'capitalize',
            },
      })(Link);
  
      return(
            <footer>
                  <div className="footer">
                        <div className = "footer_columns">
                              <div className="footer_columns_item">
                                    <div className= "footer_inst_adress">
                                          <h3>QUEM SOMOS</h3>
                                          <p>Somos apaixonados por voo livre, pioneiros na modalidade e vendedores de sonhos.</p>
                                    </div>
   
                              </div>
                              <div className="footer_columns_item">
                                    <div className= "footer_inst_adress">
                                          <h3>MAPA DO SITE</h3>
                                          <div  className="footer_mapa_do_site">
                                                <StyledLink href="/">Home</StyledLink>
                                                <StyledLink href="/vooduplo">Voo Duplo</StyledLink>
                                                <StyledLink href="/curso">Curso</StyledLink>
                                                <StyledLink href="/regalar">Carta Regalo</StyledLink>
                                                <StyledLink href="/about">Quem Somos</StyledLink>
                                          </div>
                                    </div>
                              </div>
                              <div className="footer_columns_item">
                                    <div className= "footer_inst_adress">
                                          <h3>LOCALIZAÇÃO</h3>
                                          <p>Servidão Novas Palmeiras, 1414 - Ingleses do Rio Vermelho, Florianópolis - SC, 88060-208. </p>
                                          <p>Horário de segunda a domingo, das 11:00h às 19:30h</p>
                                          <p>Tel: +55 48 9985-8393</p>
                                    </div>
   
                              </div>
                        </div>
                        <div>
                              <div className="footer_social_media_display">
                                    <StyledLink href="https://www.facebook.com/ovniparapente/" target="_blank"><FacebookIcon className="fa fa-plus-circle" style={{ fontSize: 30 }}/></StyledLink>
                                    <StyledLink href="https://www.instagram.com/ovniparapenteoficial/" target="_blank" ><InstagramIcon className="fa fa-plus-circle" style={{ fontSize: 30 }} /></StyledLink>
                                    <StyledLink href="https://www.youtube.com/channel/UC8Dh9C_NI5boCxO5NLik0vQ/" target="_blank"   ><YouTubeIcon className="fa fa-plus-circle" style={{ fontSize: 30 }} /></StyledLink>
                              </div>
                              <div className="footer_copy_display">
                                    <StyledLink href="https://simarketingparatodos.com/?v=04492b9b01cf" target="_blank">Copyright © 2021 Simarketingparatodos</StyledLink>
                     
                              </div>
                        </div>
                     
                  </div>
           
            </footer>
      )
}
   
   export default Footer;