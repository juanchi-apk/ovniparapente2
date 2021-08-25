import React from "react";
import "./about.scss";
import Image from "react-bootstrap/Image";  
import logonav from '../../Images/logodetalle.png';
import Bulletnos from './Porquenos/Bulletnos';
import ProdForm from '../ProdForm/ProdForm';




const About = ()=>{
    return(
        <div className="aboutContainer">
        <Bulletnos></Bulletnos>
        <div><Image src={logonav} alt="logonav" /></div>
        <div className="aboutContainer_flexp">
           <div className="wetitleItems">
             <h1 className="wetitle" >QUEM SOMOS</h1>
             <div className= "wetitle_text">Somos apaixonados por voo livre, pioneiros na modalidade e vendedores de sonhos. Amamos adrenalina e estamos há 25 anos praticando VOO LIVRE E PARAMOTOR no Brasil e no mundo. Com mais de 20 mil voos duplos realizados e mais de mil alunos de PARAPENTE E PARAMOTOR SOLO formados.</div>
            </div>
           <div>
             <h1 className="wetitle">CURSO PILOTO PARAPENTE SOLO</h1>
             <div className= "wetitle_text">O Curso de Piloto Solo de Parapente, tem duração em média de 40 horas, podendo variar por motivos climáticos e disponibilidade do aluno. O valor do curso é de R$3.900,00 com pagamento em até 6x sem juros nos cartões de crédito. Estão inclusos todo o material didático e de treino, não é necessário o aluno possuir nenhum tipo de equipamento inicial.</div>
          </div>
          <div>
            <h1 className="wetitle" >VOO DE PARAPENTE DUPLO</h1>
            <div className= "wetitle_text">É chamado de VOO DUPLO porque o passageiro é acompanhado por um instrutor habilitado, quem será o responsável pela pilotagem do PARAPENTE. Voamos todos os dias, sempre dependendo das condições climáticas. Às 13:00 horas (aproximadamente), inicia a subida para a rampa de decolagem, a pé ou caminhonete 4X4. A escolha da rampa será conforme a direção do vento. A duração do voo tem uma média de 15 a 20 minutos no ar, fora o tempo percorrido da trilha para chegar na rampa de decolagem. Todo o passeio tem duração aproximada de um hora e meia. Os voos são realizados quase sempre na Praia Brava. Em alguns casos por motivo de direção do vento, os voos são realizados na Praia do Santinho.</div> 
          </div>
          <div>
           <h1 className="wetitle" >Cursos e venda de equipamentos no Brasil e no mundo</h1>
            <div className= "wetitle_text"> Oferecemos Cursos Para Pilotos Nível 1, 2 y 3. Voo Duplo Instrucional, Voo de Paramotor, Propaganda Aérea, Equipamentos entre outros serviços. Com instrutor experiente e habilitado pela CBVL (Confederação Brasileira de Voo Livre. </div>
          </div> 
         
         </div>
            
           <ProdForm></ProdForm>
      
      
      </div>

      )

}

export default About;