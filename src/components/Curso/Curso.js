import React from "react";
import "./curso.scss";
import Carousel from 'react-material-ui-carousel';
import image1 from '../../Images/vooduplo4.jpg';
import image2 from '../../Images/vooduplo.jpg';
import image3 from '../../Images/vooduplo2.jpg';
import image4 from '../../Images/vooduplo3.jpg';
import Image from "react-bootstrap/Image";
import ProdForm from '../ProdForm/ProdForm'
import { withStyles } from '@material-ui/core/styles';
import backgroundImage from '../../Images/curso_form.jpg';
import MobileForm from "../MobileForm/MobileForm"


import {useMedia} from 'react-use';


const StyledCarousel = withStyles({
    root: {
      color: 'white',
      width:"100vw",

     
    },
  })(Carousel);

const CursoCont = ()=> {

    const isWide = useMedia('(min-width: 600px)');
    const isMobile =useMedia('(max-width: 599px)');

var items= [
    image3,
    image1,
    image4
    
]


    return (
    <div>
        {isWide&& (<div className = "curso_container">
        <div className ="curso_gallery">   
        <StyledCarousel> 
                {items.map((item,i)=>{ return (
                   <div className="photo_container"> 
                   <Image style={{
                        width: "100vw",
                        }} src={item} alt={`curso${1}`}  fluid ></Image>
                   </div>
                    )
                    })
                }
        </StyledCarousel>
        </div>

        <div className = "curso_section">

            <h2 className ="curso_title">CURSO PARAPENTE</h2>
            <div className="curso_text">Curso de Piloto Solo de Parapente, tem duração em média de 40 horas, podendo variar por motivos climáticos e disponibilidade do aluno. O valor do curso é de R$3.900,00 com pagamento em até 6x sem juros nos cartões de crédito. Estão inclusos todo o material didático e de treino, não é necessário o aluno possuir nenhum tipo de equipamento inicial. Você receberá um certificado. depois de terminar seu curso.
            </div>
        </div>
        
        <div className= "curso_FormContainer">
        <img src={backgroundImage} className='img-fluid smallpic' alt='Sample' />
        <ProdForm/>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        
        <div className='d-flex justify-content-center align-items-center h-100'> </div>
            
        </div>
        </div>
    </div>
        )}
        {isMobile &&(
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
            <div className = "mobile_curso_section">
                <h1 className ="mobile_curso_title">CURSO PARAPENTE</h1>
                <div className="mobile_curso_text">
                <p>Curso de Piloto Solo de Parapente, tem duração em média de 40 horas, podendo variar por motivos climáticos e disponibilidade do aluno.</p>
                <p>O valor do curso é de R$3.900,00 com pagamento em até 6x sem juros nos cartões de crédito. Estão inclusos todo o material didático e de treino, não é necessário o aluno possuir nenhum tipo de equipamento inicial</p>
                <p>Você receberá um certificado. depois de terminar seu curso.</p>
                </div>
            </div>
            <div className= "mobile_curso_FormContainer">
                <Image src={backgroundImage} fluid />
                <MobileForm/>
            </div>
        </div>    
        )}
    </div>
    )
}

export default CursoCont
