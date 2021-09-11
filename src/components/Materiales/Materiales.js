import React from "react";
import BulletItem from "../../fragments/Bullet";
import "./materiales.scss"




const Materiales = () => {

    const matItems = [
        "Material didático (apostila de estudo)",
        "Material de treino (parapantes e equipamentos)",
        "Acompanhamento de instrutor e monitores.",
        "Transporte desde a escola até os locais de treino",
        "Habilitação de PILOTO certificada pela C.B.V.L. ( Confederação Brasileira de Voo Livre) em conjunto com a FAI (International Aeronautical Federation)."
    ];

    return (
        < div className ="material_Container">
        <h2>O QUE ESTÁ INCLUSO NO CURSO? </h2>
            {matItems.map((matItem, i) => {
                return (
                    <div key={i}>
                        <BulletItem content={matItem} />
                    </div>
                )
            })}

        </div>


    )
}

export default Materiales;