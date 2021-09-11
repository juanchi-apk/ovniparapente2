import React from "react";
import BulletItem from "../../fragments/Bullet";



const Objetivos = () => {

    const objItems = [
        "Controle de vela no chão em diferentes locais de treino.",
        "Voos duplo instrucionais de pilotagem (Navegação).",
        "Treino de voo nas dunas (Decolagem e pouso).",
        "Domínio do parapente em rampa.",
        'Treinamento em simulador de voo ("Força G" e postura)',
        "Meteorologia aplicada no voo livre."
    ]

    return (
        < div className ="material_Container">
        <h2>OBJETIVOS PARA SE TORNAR PILOTO DE PARAPENTE</h2>
            {objItems.map((objItem, i) => {
                return (
                    <div key={i}>
                        <BulletItem content={objItem} />
                    </div>
                )
            })}

        </div>


    )
}

export default Objetivos;