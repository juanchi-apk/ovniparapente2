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
    background: 'transparent',
    borderRadius: 3,
    border: "2px solid #2c2c2c ",
    color: '#2c2c2c',
    fontWeight:"700",
    fontFamily: "Montserrat",
    height: 48,
    padding: '0 30px',
    marginTop:'50px',     

    '&:hover' :{  
      textDecoration:"none",
      color: "#42f934",
      border: "2px solid #42f934 ",

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
        <h2 className="transition">VOO DUPLO INSTRUCIONAL<br/><small> Voo acompanhado por um instrutor habilitado.  </small></h2>
        <div className="cta-container transition"><Link style={{textDecoration:"none"}} href="/vooduplo" ><StyledButtonProd>SABER MAS</StyledButtonProd></Link></div>
        <div className="card_circle transition circle1"><Image src={image1} roundedCircle /></div>
    </div>
    <div className="card transition">
        <h2 className="transition">CURSO PILOTO PARAPENTE<br/><small>Reconhecido pela Confederação Brasileira de Voo Livre (C.B.V.L.)</small></h2>
        <div className="cta-container transition"><Link style={{textDecoration:"none"}} href="/curso" ><StyledButtonProd>SABER MAS</StyledButtonProd></Link></div>
        <div className="card_circle transition circle2" ><Image src={image2} roundedCircle /></div>
    </div>          
    <div className="card transition">
        <h2 className="transition">CARTÃO PRESENTE<br/><small>Presenteie alguém especial com um voo inesquecível!</small></h2>
        <div className="cta-container transition"><Link style={{textDecoration:"none"}} href="/regalar" ><StyledButtonProd>SABER MAS</StyledButtonProd></Link></div>
        <div className="card_circle transition circle3" ><Image src={image3} roundedCircle /></div>
    </div>
    </div>
)
} 

export default ProductCards