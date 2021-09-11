import React from "react";
import "./faq.scss";
import Carousel from 'react-material-ui-carousel';
import { withStyles } from '@material-ui/core/styles';
    


const Faq = ()=>{

    const StyledCarousel = withStyles({
        root: {
          width:"100vw",
          items:2,
    
          },
      })(Carousel);


    return(
        <div className ="faqContainer">
            <h1>PREGUNTAS FRECUENTES</h1>
            <div className = "questioncontainer">

            <StyledCarousel
        
            autoplay
            animation="slide"> 
            <div className = "frecuentCarousel">
                <div className = "questionitem">
                    <div className= "questionlist">O QUE DEVO VESTIR?</div>
                    <div>Recomenda-se usar roupas leves, tipo esportivas. É importante o uso de calçado fechado. Os itens de segurança, como capacete, serão fornecidos pela escola.</div>
                </div>          
                <div className = "questionitem">
                    <div className= "questionlist">POSSO USAR ÓCULOS DURANTE O VOO?</div>
                    <div>Não há problema em usar óculos durante o voo.</div>
                </div>
                <div className = "questionitem">
                    <div className= "questionlist">COMO FUNCIONA O ALUGUEL DA CÂMERA GOPRO?</div>
                    <div>Pelo valor de R$80,00 registramos seu voo com a nossa câmera GoPro e transferimos o vídeo para seu telefone ou posteriormente por e-mail.</div> 
                </div>
            </div>
            <div className = "frecuentCarousel">
               
                <div className = "questionitem">
                    <div className= "questionlist">POSSO LEVAR MEU TELEFONE CELULAR?</div>
                    <div>Sim, claro! Ótima opção se não for adquirido o serviço de aluguel de câmera GoPro.</div>
                </div>
                <div className = "questionitem">
                    <div className= "questionlist">QUAL A IDADE MÍNIMA PARA FAZER UM VOO?</div>
                    <div>Não é por idade e sim por peso, aproximadamente entre 25/30 quilos. Menores de 18 anos poderão realizar a atividade com termo de responsabilidade assinado pelo responsável legal.</div>
                </div>  
                <div className = "questionitem">
                    <div className= "questionlist">QUAL É O PESO MÁXIMO PARA UM VOO?</div>
                    <div>Até uns 115 quilos aproximadamente, sempre dependendo das condições climáticas no dia do voo.</div>
                </div>
            </div>
            <div className = "frecuentCarousel">
                <div className = "questionitem">
                    <div className= "questionlist">EESTAMOS COBERTOS POR ALGUMA SEGURADORA?</div>
                    <div>Sim. Contamos com a cobertura da seguradora "PORTO SEGURO CIA DE SEGUROS" 
                    Corretora: "GIE CORRETORA DE SEGUROS LTDA"
                    </div>
                </div>
                <div className = "questionitem">
                    <div className= "questionlist">EU PRECISO DE ALGUM CONHECIMENTO PRÉVIO?</div>
                    <div>Você não precisa ter nenhuma experiência prévia, nós iremos disponibilizar a introdução teórica e a nossa equipe acompanhará você desde o começo até o fim do passeio.
                    </div>
                </div>
                
            </div>
            
           
        
                    
            </StyledCarousel>

                
                 <div className="faqInfo">
                     <p>Duração do voo: em média de 15/20 minutos aproximadamente, conforme o vento na hora do voo. </p>
                    <p>A EMPRESA SE RESERVA: o direito de cancelar o voo duplo instrucional, alterar ou mudar o local de decolagem, a data e o horário do serviço por razões de força maior ou para melhor desempenho da prática deste esporte.
                    </p>
                </div>
            </div>

        </div>

    )

}

export default Faq;