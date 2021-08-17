import React from "react";
import "./faq.scss"

const Faq = ()=>{
    return(
        <div className ="faqContainer">
            <div className = "questioncontainer">
        <div className = "questionitem">
            <div className= "questionlist">QUE EU DEVO VESTIR?</div>
            <div>Recomenda-se usar roupas adaptadas ao clima. É importante usar sapatos firmes e roupas  confortáveis. O restante do material necessário para o voo (capacete, etc.) será fornecido pelo piloto.</div>
        </div>          
        
        
        <div className = "questionitem">
            <div className= "questionlist">POSSO USAR ÓCULOS DURANTE O VÔO?</div>
            <div>Não há problema em usar óculos durante o vôo. Se estiver ensolarado, recomendamos especialmente o uso de óculos escuros.</div>
        </div>
        
        
        <div className = "questionitem">
            <div className= "questionlist">POSSO LEVAR UM TELEFONE CELULAR?</div>
            <div>Sim, claro. sem problemas?</div> 
        </div>
        <div className = "questionitem">
            <div className= "questionlist">COMO RECEBO MEU VÍDEO?</div>
            <div>Temos uma câmera GO-PRO, podemos registrar sua experiência, editá-la e enviá-la a você por um preço de XXX</div>
        </div>
        <div className = "questionitem">
            <div className= "questionlist">COM QUE IDADE PODE SER FEITO UM VÔO?</div>
            <div>A partir dos 5 anos você pode voar se tiver o consentimento dos pais; no entanto, um peso mínimo de 20 kg é um requisito essencial.</div>
        </div>  
        <div className = "questionitem">
            <div className= "questionlist">QUAL É O PESO MÁXIMO PARA UM VOO?</div>
            <div>Você pode pesar 110 Kg que continuaríamos dentro da faixa de peso aprovada para o parapente</div>
        </div>
        <div className = "questionitem">
            <div className= "questionlist">ESTAMOS COBERTOS POR UM SEGURO?</div>
            <div>Temos seguro xxxx que cobre o passageiro e terceiros </div>
        </div>
        <div className = "questionitem">
            <div className= "questionlist">EU PRECISO DE ALGUM CONHECIMENTO PRÉVIO?</div>
            <div>Nenhuma experiência anterior é necessária. Você só precisará correr alguns metros para decolar com seu instrutor.
            Recomendamos que você use roupas e sapatos confortáveis.
            Nos Cuidamos de todo o resto</div>
        </div>
        
        <div>
        Duração do vôo: entre 10 e 25 minutos.
        </div>
        </div>

        </div>

    )

}

export default Faq;