import React from "react";
import "./cards.scss";
import image1 from '../../Images/vooduplo2.jpg';
import Image from "react-bootstrap/Image";
import image2 from '../../Images/cursoparapente.jpg';
import image3 from '../../Images/regalar.jpg';
import {Button, Link} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';


const StyledButtonProd = withStyles({
    root: {
        backgroundColor: "transparent",
        borderRadius: 3,
        border: "1px solid #0ed600 ",
        color: '#0ed600', 
      height: 48,
      padding: '0 30px',
      marginTop:'50px',
      '&:hover' :{  
        background: "#0ed600",
        color: "white",
        border: "1px solid white ",

      },     
     
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


const ProductCards = () => {

return (
    <div className  = "cardContainer">
    <div className="card transition">
        <h2 className="transition">VOODUPLO<br/><small> Voa acompanhado por um instrutor habilitado! </small></h2>
        <div className="cta-container transition"><Link href="/vooduplo" ><StyledButtonProd>SABER MAS</StyledButtonProd></Link></div>
        <div className="card_circle transition circle1"><Image src={image1} roundedCircle /></div>
    </div>
    <div className="card transition">
        <h2 className="transition">CURSO PARAPENTE<br/><small>Curso tem duração em média de 40 horas</small></h2>
        <div className="cta-container transition"><Link href="/curso" ><StyledButtonProd>SABER MAS</StyledButtonProd></Link></div>
        <div className="card_circle transition circle2" ><Image src={image2} roundedCircle /></div>
    </div>          
    <div className="card transition">
        <h2 className="transition">CARTÃO PRESENTE<br/><small>Compra un voo para tu amigo!</small></h2>
        <div className="cta-container transition"><Link href="/regalar" ><StyledButtonProd>SABER MAS</StyledButtonProd></Link></div>
        <div className="card_circle transition circle3" ><Image src={image3} roundedCircle /></div>
    </div>
    </div>
)
} 

export default ProductCards