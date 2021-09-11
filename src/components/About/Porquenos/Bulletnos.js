import React from "react";
import "./bulletnos.scss";
import BulletItem from "../../../fragments/Bullet";
import {useMedia} from 'react-use';




const BulletAbout = ()=>{

    const isWide = useMedia('(min-width: 600px)');
    const isMobile = useMedia('(max-width: 599px)');
   
        const faqItems = [
            "PROFISSIONALISMO: Temos os recursos, o conhecimento, a experiência e a predisposição para que passeio ou curso seja inesquecível.",
            "PAIXÃO: Porque amamos o que fazemos",
            "FACILITAMOS: Disponibilizamos diversas formas de pagamento.",
            "SEGURANÇA: Mesmo sendo um esporte radical, contamos com a técnica, experiência e conhecimento que adquirimos durante uma vida dedicada ao voo livre.",
            "LOCALIZAÇÃO: Nossa escola está num ponto privilegiado e estratégico para quem vem aprender a voar ou curtir umas férias em Florianópolis",
            'INFRAESTRUTURA: Temos um SIMULADOR de VOO especificamente projetado para treinar a "Força G", técnicas de decolagem e pouso.',
            "TRANSPARÊNCIA: Se no dia da sua reserva as CONDIÇÕES CLIMÁTICAS não forem favoráveis,  você poderá alterar a data ou solicitar o estorno da sua compra.",
            "COMPROMISSO: Profissionais altamente qualificados e experientes para fazer desta experiência, a melhor de todas!"
        ];
    
        return (
            <div>
            {isWide && (< div className ="material_Container">
            <h2>POR QUE ESCOLHERNOS?</h2>
                {faqItems.map((faqItem, i) => {
                    return (
                        <div key={i}>
                            <BulletItem content={faqItem} />
                        </div>
                    )
                })
                }


    
            </div>)}
            {isMobile && (< div className ="mobile_material_Container">
            <h2>POR QUE ESCOLHERNOS?</h2>
                {faqItems.map((faqItem, i) => {
                    return (
                        <div key={i}>
                            <BulletItem content={faqItem} />
                        </div>
                    )
                })
                }


    
            </div>)}


            </div>
    
        

    )

}

export default BulletAbout;