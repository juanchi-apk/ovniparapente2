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
        <h4>Nossa escola está em um ponto estratégico. No meio das 6 rampas mais importantes de floranápolis: de Rio vermelho, Brava, Mole, Lagoa Santinho e Moçambique.</h4>
        <p>Servidão Novas Palmeiras, 1414 - Ingleses do Rio Vermelho, Florianápolis - SC, 88060-208. </p>
        <p>Horário de segunda a domingo, das 11:00h às 19:30h</p>
        <p>Tel: +55 48 9985-8393</p>
    </div>
</div>

)

}


export default Location;



