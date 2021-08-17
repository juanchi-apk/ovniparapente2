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
        <h4>A escola está em um lugar privilegiado e estratégico pra quem quer aprender ou vir voar em Florianópolis.</h4>
        <p>Servidão Novas Palmeiras, 1414 - Ingleses do Rio Vermelho, Florianópolis - SC, 88060-208. </p>
    </div>
</div>

)

}


export default Location;



