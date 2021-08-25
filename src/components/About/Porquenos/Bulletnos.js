import React from "react";
import "./bulletnos.scss";
import Carousel from 'react-material-ui-carousel';
import { withStyles } from '@material-ui/core/styles';




const BulletAbout = ()=>{

    const StyledCarousel = withStyles({
        root: {
          width:"100vw",
          items:2,
          marginLeft:"auto",
          marginRight:"auto",
    
          },
      })(Carousel);


    return(
        <div className ="bulletContainer">
            <h1>PREGUNTAS FRECUENTES</h1>
            <div className = "reasoncontainer">

            <StyledCarousel
        
            autoplay
            animation="slide"> 
            <div className = "bulletCarousel">
                <div className = "bulletitem">
                    <div className= "bulletlist">PROFISSIONALISMO</div>
                    <div>emos os recursos, o conhecimento, a experiência e a predisposição para que você tenha o melhor dia da sua vida.</div>
                </div>          
                <div className = "bulletitem">
                    <div className= "bulletlist">PAIXÃO</div>
                    <div>porque amamos o que fazemos</div>
                </div>
                <div className = "bulletitem">
                    <div className= "bulletlist">FLEXIBILIDADE</div>
                    <div>oferecemos diferentes meios de pagamento</div> 
                </div>
            </div>
            <div className = "bulletCarousel">
               
                <div className = "bulletitem">
                    <div className= "bulletlist">SEGURANÇA</div>
                    <div>primeiro é preciso esclarecer que não é um esporte de risco.</div>
                </div>
                <div className = "bulletitem">
                    <div className= "bulletlist">LOCALIZAÇÃO</div>
                    <div>A escola está em um lugar privilegiado e estratégico pra quem quer aprender ou vir voar em Florianópolis</div>
                </div>  
                <div className = "bulletitem">
                    <div className= "bulletlist">INFRAESTRUTURA</div>
                    <div>Em nossa escola temos um simulador especificamente projetada pensando em você para você primeiro praticar no chão</div>
                </div>
            </div>
            <div className = "bulletCarousel">
                <div className = "bulletitem">
                    <div className= "bulletlist">TRANSPARÊNCIA</div>
                    <div>Se no dia da sua reserva as condições do voo não forem boas. Avisaremos, para que decida se deseja voar  ou se prefere alterar o dia da reserva</div>
                </div>
                <div className = "bulletitem">
                    <div className= "bulletlist">COMPROMISSO </div>
                    <div>Profissionais altamente qualificados e experientes para tornar sua experiência única.</div>
                </div>
                
            </div>
            
           
        
                    
            </StyledCarousel>

                
                 
            </div>

        </div>

    )

}

export default BulletAbout;