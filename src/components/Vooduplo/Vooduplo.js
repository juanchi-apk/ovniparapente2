import React from "react";
import "./vooduplo.scss";
import Carousel from 'react-material-ui-carousel';
import image1 from '../../Images/vooduplo4.jpg';
import image2 from '../../Images/vooduplo.jpg';
import image3 from '../../Images/vooduplo2.jpg';
import image4 from '../../Images/vooduplo3.jpg';
import Image from "react-bootstrap/Image";
import ProdForm from '../ProdForm/ProdForm';
import {useMedia} from 'react-use';
import MobileForm from "../MobileForm/MobileForm"
import { withStyles } from '@material-ui/core/styles';
import backgroundImage from '../../Images/vooduplo_form.jpg'

const StyledCarousel = withStyles({
    root: {
      color: 'white',
      width:"100vw",

     
    },
  })(Carousel);



const VooduploCont = ()=> {
    
    const isWide = useMedia('(min-width: 600px)');
    const isMobile =useMedia('(max-width: 599px)');


const items= [
    image3,
    image1,
    image4
    
]


    return (
        <div>
        {isWide && (
            <div className = "vooduplo_container">
                <div className ="vooDuplo_gallery">   
                    <StyledCarousel
        
        autoplay> 
                {items.map((item,i)=>{ return (
                   <div className="photo_container"> 
                   <Image 
                   style={{
                        width: "100vw",
                        }}
                    src={item} 
                    alt={`vooduplo${1}`}/>
                    
                   </div>
                    )
                    })
                }
        </StyledCarousel>
                </div>
                <div className = "vooduplo_section">
                    <h1 className ="vooduplo_title">VOO DUPLO</h1>
                    <div className="vooduplo_text">É chamado de VOO DUPLO porque o passageiro é acompanhado por um instrutor habilitado, quem será o responsável pela pilotagem do PARAPENTEx. O valor do voo duplo é de R$3.900,00 com pagamento em até 6x sem juros nos cartões de crédito.Voamos todos os dias, sempre dependendo das condições climáticas. Às 13:00 horas (aproximadamente), inicia a subida para a rampa de decolagem, a pé ou caminhonete 4X4. A escolha da rampa será conforme a direção do vento. A duração do voo tem uma média de 15 a 20 minutos no ar, fora o tempo percorrido da trilha para chegar na rampa de decolagem. Todo o passeio tem duração aproximada de um hora e meia. Os voos são realizados quase sempre na Praia Brava. Em alguns casos por motivo de direção do vento, os voos são realizados na Praia do Santinho.
                    </div>
                </div>
                <div className= "vooduplo_FormContainer">
                    <img src={backgroundImage} className='img-fluid smallpic' alt='Sample' />
                    <ProdForm/>
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'></div>
                    </div>
                </div>
            </div>
        )}
        {isMobile && (
                <div className = "vooduplo_container">
                    <div className ="vooDuplo_gallery">   
                        <StyledCarousel
            
            autoplay> 
                    {items.map((item,i)=>{ return (
                       <div className="photo_container"> 
                       <Image 
                       style={{
                            width: "100vw",
                            }}
                        src={item} 
                        alt={`vooduplo${1}`}/>
                        
                       </div>
                        )
                        })
                    }
            </StyledCarousel>
                    </div>
                    <div className = "mobile_vooduplo_section">
                        <h1 className ="mobile_vooduplo_title">VOO DUPLO</h1>
                        <div className="mobile_vooduplo_text">
                        <p>É chamado de VOO DUPLO porque o passageiro é acompanhado por um instrutor habilitado, quem será o responsável pela pilotagem do PARAPENTEx.</p>
                        <p>O valor do voo duplo é de R$3.900,00 com pagamento em até 6x sem juros nos cartões de crédito.</p>
                        <p>Voamos todos os dias, sempre dependendo das condições climáticas. Às 13:00 horas (aproximadamente), inicia a subida para a rampa de decolagem, a pé ou caminhonete 4X4. A escolha da rampa será conforme a direção do vento. A duração do voo tem uma média de 15 a 20 minutos no ar, fora o tempo percorrido da trilha para chegar na rampa de decolagem.</p>
                        <p>Todo o passeio tem duração aproximada de um hora e meia. Os voos são realizados quase sempre na Praia Brava. Em alguns casos por motivo de direção do vento, os voos são realizados na Praia do Santinho.</p>
                        </div>
                    </div>
                    <div className= "mobile_vooduplo_FormContainer">
                        <Image src={backgroundImage} fluid />
                        <MobileForm/>
                    </div>
                </div>
            )}

        

        </div>        
    )
}

export default VooduploCont
