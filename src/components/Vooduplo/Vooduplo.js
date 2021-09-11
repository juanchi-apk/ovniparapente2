import React from "react";
import "./vooduplo.scss";
import image1 from '../../Images/slide_vooduplo1.jpg';
import image2 from '../../Images/slide_vooduplo2.jpg';
import image3 from '../../Images/slide_vooduplo3.jpg';
import image4 from '../../Images/slide_vooduplo4.jpg';
import Image from "react-bootstrap/Image";
import {useMedia} from 'react-use';
import backgroundImage from '../../Images/vooduplo_form.jpg'
import ContactForm from "../ContactForm/ContactForm";
import Ovnicarrousel from "../../fragments/Ovnicarrousel";





const VooduploCont = ()=> {
    
    const isWide = useMedia('(min-width: 600px)');
    const isMobile =useMedia('(max-width: 599px)');

      const items= [
        image1,
        image2,
        image3,
        image4
        
    ]
    

    return (
        <div>
        {isWide && (
            <div className = "vooduplo_container">
                <div className ="vooDuplo_gallery">   
                   
                <Ovnicarrousel items={items}/>
                
                </div>
                <div className = "vooduplo_section">
                    <h1 className ="vooduplo_title">VOO DUPLO INSTRUCIONAL</h1>
                    <div className="vooduplo_text"><p>Neste voo você terá uma primeira interação com os conceitos básicos do voo livre.</p>
                        <p>É chamado de VOO DUPLO INSTRUCIONAL porque o passageiro é acompanhado por um instrutor habilitado, quem será o responsável pela pilotagem do PARAPENTE. O valor é de   R$310,00 podendo ser parcelado em até 3X sem juros ou 12X no cartão de crédito.</p>
                        <p>Voamos todos os dias, sempre dependendo das condições climáticas. Às 13:00 horas (aproximadamente), inicia a subida até a rampa de decolagem, a pé ou de caminhonete 4X4. A escolha da rampa será conforme a direção do vento. A duração do voo tem uma média de 15 a 20 minutos no ar . O passeio completo tem duração aproximada de um hora e meia. Os voos são realizados quase sempre na Praia Brava. Dependendo da direção do vento no dia da reserva, o local pode variar entre Santinho, Rio Vermelho ou Moçambique.</p>
                        <p>Durante o voo você poderá levar a sua própria câmera ou telefone ou adquirir o nosso serviço de aluguel de câmera GoPro pelo valor de R$80.</p>
                    </div>
                </div>
                
                
                <ContactForm/>
            
            
            </div>
        )}
        {isMobile && (
                <div className = "vooduplo_container">
                    <div className ="vooDuplo_gallery">   
                    <Ovnicarrousel items={items}/>
                    </div>
                    <div className = "mobile_vooduplo_section">
                        <h1 className ="mobile_vooduplo_title">VOO DUPLO</h1>
                        <div className="mobile_vooduplo_text">
                        <p>Neste voo você terá uma primeira interação com os conceitos básicos do voo livre.</p>
                        <p>É chamado de VOO DUPLO INSTRUCIONAL porque o passageiro é acompanhado por um instrutor habilitado, quem será o responsável pela pilotagem do PARAPENTE. O valor é de   R$310,00 podendo ser parcelado em até 3X sem juros ou 12X no cartão de crédito.</p>
                        <p>Voamos todos os dias, sempre dependendo das condições climáticas. Às 13:00 horas (aproximadamente), inicia a subida até a rampa de decolagem, a pé ou de caminhonete 4X4. A escolha da rampa será conforme a direção do vento. A duração do voo tem uma média de 15 a 20 minutos no ar . O passeio completo tem duração aproximada de um hora e meia. Os voos são realizados quase sempre na Praia Brava. Dependendo da direção do vento no dia da reserva, o local pode variar entre Santinho, Rio Vermelho ou Moçambique.</p>
                        <p>Durante o voo você poderá levar a sua própria câmera ou telefone ou adquirir o nosso serviço de aluguel de câmera GoPro pelo valor de R$80.</p>
                        </div>
                    </div>
                    <div className= "mobile_vooduplo_FormContainer">
                        <Image src={backgroundImage} fluid />
                        <ContactForm/>
                    </div>
                </div>
            )}

        

        </div>        
    )
}

export default VooduploCont
