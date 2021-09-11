import React from "react";
import "./about.scss";
import Image from "react-bootstrap/Image";
import logonav from '../../Images/logodetalle.png';
import Bulletnos from './Porquenos/Bulletnos';
import ContactForm from "../ContactForm/ContactForm";
import Location from '../Location/Location';
import certif from '../../Images/certificate.jpg';
import { useMedia } from 'react-use';






const About = () => {

  const isWide = useMedia('(min-width: 600px)');
  const isMobile = useMedia('(max-width: 599px)');

  return (
    <div>
      {isWide && (    
    <div className="aboutContainer">
      <div><Image src={logonav} alt="logonav" /></div>
      <div className="aboutContainer_flexp">
        <div className="wetitleItems">
          <h2 className="wetitle" >QUEM SOMOS</h2>
          <div className="wetitle_text"> Tudo começou lá pelo 1994, quando o Daivison "Moskito" Marques, instrutor da escola, entrou no mundo do voo livre, de asa delta naquela época. Com a chegada do parapente ele começou a incursionar nesta modalidade, trabalhando na testagem dos novos equipamentos.
            Os anos foram passando e ele dedicou a sua vida à prática deste esporte, levando a sua paixão para mais de 35 países, abrindo novas rampas de decolagem em muitos deles.
            Como todo grande voador, e sonhador, não ficou por aí. Pois ele também ama motores e velocidade, se tornando um grande piloto de Paramotor, Paratrike e agora também Trike (asa delta motorizado).
            Com mais de 20.000 voos duplo realizados e centenas de alunos formados ao redor do mundo, hoje a O.V.N.I. ESCOLA DE PARAPENTE é uma grande família.
            Somos apaixonados por voo, pioneiros na modalidade e realizadores de sonhos. Amamos adrenalina e queremos levar essa sensação até você
          </div>

          
        </div>
        
        <div style={{width:"40%", textAlign:"center" ,margin:"30px 0px"}}>
          <Image src={certif} fluid/>
          </div>
        <div className="wetitleItems">
          <h2 className="wetitle" >CURSOS E VENDA DE EQUIPAMENTOS NO BRASIL E NO MUNDO</h2>
          <div className="wetitle_text"> Oferecemos Cursos Para Pilotos Nível 1, 2 y 3. Voo Duplo Instrucional, Voo de Paramotor, Propaganda Aérea, Equipamentos entre outros serviços. Com instrutor experiente e habilitado pela CBVL (Confederação Brasileira de Voo Livre. </div>
        </div>
        <Bulletnos ></Bulletnos>

      </div>


      <Location />
      <ContactForm />



    </div>
      )}
    {isMobile && (
      <div className="mobile_aboutContainer">
      <div><Image src={logonav} alt="logonav" /></div>
      <div className="mobile_aboutContainer_flexp">
        <div className="mobile_wetitleItems">
          <h2 className="mobile_wetitle" >QUEM SOMOS</h2>
          <div className="mobile_wetitle_text"> Tudo começou lá pelo 1994, quando o Daivison "Moskito" Marques, instrutor da escola, entrou no mundo do voo livre, de asa delta naquela época. Com a chegada do parapente ele começou a incursionar nesta modalidade, trabalhando na testagem dos novos equipamentos.
            Os anos foram passando e ele dedicou a sua vida à prática deste esporte, levando a sua paixão para mais de 35 países, abrindo novas rampas de decolagem em muitos deles.
            Como todo grande voador, e sonhador, não ficou por aí. Pois ele também ama motores e velocidade, se tornando um grande piloto de Paramotor, Paratrike e agora também Trike (asa delta motorizado).
            Com mais de 20.000 voos duplo realizados e centenas de alunos formados ao redor do mundo, hoje a O.V.N.I. ESCOLA DE PARAPENTE é uma grande família.
            Somos apaixonados por voo, pioneiros na modalidade e realizadores de sonhos. Amamos adrenalina e queremos levar essa sensação até você
          </div>

          
        </div>
        
        <div style={{width:"40%", textAlign:"center" ,margin:"30px 0px"}}>
          <Image src={certif} fluid/>
          </div>
        <div className="mobile_wetitleItems">
          <h2 className="mobile_wetitle" >CURSOS E VENDA DE EQUIPAMENTOS NO BRASIL E NO MUNDO</h2>
          <div className="mobile_wetitle_text"> Oferecemos Cursos Para Pilotos Nível 1, 2 y 3. Voo Duplo Instrucional, Voo de Paramotor, Propaganda Aérea, Equipamentos entre outros serviços. Com instrutor experiente e habilitado pela CBVL (Confederação Brasileira de Voo Livre. </div>
        </div>
        <Bulletnos ></Bulletnos>

      </div>


      <Location />
      <ContactForm />



    </div>  


    )}

    </div>

  )

}

export default About;