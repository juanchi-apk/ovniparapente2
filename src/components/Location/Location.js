import React from "react";
import Image from "react-bootstrap/Image";
import {Link} from "@material-ui/core";
import mapImage from "../../Images/mapa.jpg";
import "./location.scss"

const Location = () =>{

return(
<div className= "location_container">
    <div className="location_image">   
        <Link href="https://g.page/ovniparapenteoficial?share" target= "_blank"><Image src={mapImage} fluid /></Link>
    </div>
    <div className = "location_text">
        <h1>LOCALICAZAO</h1>
        <h4>Nossa escola se encontra num ponto estratégico, no meio das 6 rampas mais importantes de Florianópolis: Rio Vermelho, Praia Brava, Praia Mole, Lagoa da Conceição, Santinho e Moçambique.</h4>
        <p>Servidão Novas Palmeiras, 1414 - Rio Vermelho, Florianópolis - SC, 88060-208. </p>
        <p>Horário de atendimento: Segunda a domingo, das 10:00h às 20:30h</p>
        <p>Tel: +55 48 99985-8393</p>
    </div>
</div>

)

}


export default Location;



