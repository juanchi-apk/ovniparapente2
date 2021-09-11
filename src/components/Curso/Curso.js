import React from "react";
import "./curso.scss";
import Image from "react-bootstrap/Image";
import ContactForm from "../ContactForm/ContactForm";
import backgroundImage from '../../Images/curso_form.jpg';
import image1 from '../../Images/slide_curso1.jpg';
import image2 from '../../Images/slide_curso2.jpg';
import image3 from '../../Images/slide_curso3.jpg';
import image4 from '../../Images/slide_curso4.jpg';
import {useMedia} from 'react-use';
import Materiales from '../Materiales/Materiales';
import Objetivos from "../Objetivos/Objetivos";
import Fade from 'react-reveal/Fade';
import Ovnicarrousel from "../../fragments/Ovnicarrousel";




const CursoCont = ()=> {

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
        {isWide&& (<div className = "curso_container">
        <div className ="curso_gallery">   
       
        <Ovnicarrousel items={items}/>
               
        </div>

        <div className = "curso_section">

            <h2 className ="curso_title">CURSO PILOTO DE PARAPENTE</h2>
            <div className="curso_text"><p>O Curso de PILOTO SOLO DE PARAPENTE, tem uma duração média de 40 horas entre prática e teoria, podendo variar por motivos climáticos e disponibilidade do aluno</p>
                <p>O valor do curso é de R$3.900,00 com pagamento em até 6X sem juros no cartão de crédito ou boleto programado, ou até 12X com juros</p>
                <p>Estão inclusos todo o material didático e de treino, não é necessário o aluno possuir nenhum tipo de equipamento inicial.</p>
                <p>Uma vez finalizado o curso, você receberá um certificado da O.V.N.I. ESCOLA DE PARAPENTE, e iniciaremos o seu cadastro junto a Confederação Brasileira de Voo Livre (C.B.V.L.) para obter a sua carteira de habilitação válida para todo o território nacional em parceria com a FAI (International Aeronautical Federation) para voos internacionais. </p>
            </div>
        </div>
        <Fade duration={2000} left distance="200px"  >
                    <Materiales/>
                    <Objetivos/>
        </Fade> 
        {/* <div className="curso_FormContainer">
        <img src={backgroundImage} className='img-fluid smallpic' alt='Sample' />
        <ProdForm/>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        
        <div className='d-flex justify-content-center align-items-center h-100'> </div>
            
        </div>
        </div> */}
        <ContactForm/>

                
    </div>
        )}
        {isMobile &&(
            <div className = "curso_container">
            <div className ="vooDuplo_gallery">   
            <Ovnicarrousel items={items}/>
            </div>
            <div className = "mobile_curso_section">
                <h1 className ="mobile_curso_title">CURSO PILOTO DE PARAPENTE</h1>
                <div className="mobile_curso_text">
                <p>O Curso de PILOTO SOLO DE PARAPENTE, tem uma duração média de 40 horas entre prática e teoria, podendo variar por motivos climáticos e disponibilidade do aluno</p>
                <p>O valor do curso é de R$3.900,00 com pagamento em até 6X sem juros no cartão de crédito ou boleto programado, ou até 12X com juros</p>
                <p>Estão inclusos todo o material didático e de treino, não é necessário o aluno possuir nenhum tipo de equipamento inicial.</p>
                <p>Uma vez finalizado o curso, você receberá um certificado da O.V.N.I. ESCOLA DE PARAPENTE, e iniciaremos o seu cadastro junto a Confederação Brasileira de Voo Livre (C.B.V.L.) para obter a sua carteira de habilitação válida para todo o território nacional em parceria com a FAI (International Aeronautical Federation) para voos internacionais. </p>
                </div>
            </div>
            <div className= "mobile_curso_FormContainer">
                <Image src={backgroundImage} fluid />
                <ContactForm/>
            </div>
        </div>    
        )}
    </div>
    )
}

export default CursoCont
