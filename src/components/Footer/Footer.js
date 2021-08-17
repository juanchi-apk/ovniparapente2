import React from 'react';
import logoig from "../../Images/instagram.png";
import logofb from "../../Images/facebook.png";
import logoyt from "../../Images/youtube.png";
import logofooter from "../../Images/faviconOvni.png";
import styles from "./footer.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Link} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';



const Footer =  ()=>{
    
      const StyledLink = withStyles({
            root: {
              background: 'transparent',
              color: 'rgb(224, 224, 224)',
              padding: '10px 30px',
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
                              <div className = "footer_inst_logo_img">
                                    <img  alt="logofooter"   width="90" height="90" src={logofooter}/>
                                    
                              </div>
                              
                              
                              <div className= "footer_inst_adress">
                              <h3>QUEM SOMOS</h3>
                              Servidão Novas Palmeiras, 1414 - Ingleses do Rio Vermelho, Florianópolis - SC, 88060-208, 
                              </div>
   
                        </div>
                              <div className="footer_columns_item">
                              <div className= "footer_inst_adress">
                              Servidão Novas Palmeiras, 1414 - Ingleses do Rio Vermelho, Florianópolis - SC, 88060-208, 
                              </div>
   
                        </div>
                              <div className="footer_columns_item">
                              <div className= "footer_inst_adress">
                              Servidão Novas Palmeiras, 1414 - Ingleses do Rio Vermelho, Florianópolis - SC, 88060-208, 
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
                                    <StyledLink href="https://simarketingparatodos.com/?v=04492b9b01cf">Copyright © 2021 Simarketingparatodos</StyledLink>
                     
                              </div>
                        </div>
                     
                  </div>
           
            </footer>
      )
}
   
   export default Footer;