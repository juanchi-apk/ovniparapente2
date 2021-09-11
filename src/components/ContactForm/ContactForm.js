import React from 'react';
import "./contactform.scss";
import {setName, setMail ,setPhone} from '../../store/action';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';




const UserForm = ({onNameChange, onMailChange, onPhoneChange, name, phone , mail})=>   {

 

const serviceid = "service_8qo0hym";
const templateid= "template_gmy0i5j";
const userid ="user_sw6HbUkKsPU1z6TnaKssN";


    console.log(name + phone + mail);

    function sendEmail(e) {
      e.preventDefault();
    
      
       emailjs.sendForm(serviceid, templateid, e.target, userid)
        .then((result) => {
            console.log(result.text);
            onNameChange("");
            onMailChange("");
            onPhoneChange("");
        }, (error) => {
            console.log(error.text);
        });
    } 


    return (

           <div className="signupSection">
        <Fade duration={2000} left>
        <form onSubmit={sendEmail} className="signupForm" name="signupform">
          <h2>AGENDE SEU VÔO HOJE E SINTA O PRAZER DE VOAR!!</h2>
          <ul className="noBullet">
            <li>
              <label htmlFor="name"></label>
              <input type="text" className="inputFields" id="from_name" placeholder="Nome" name="from_name" onInput={(e) => onNameChange(e.target.value)} value={name} required></input>
            </li>
            <li>
              <label htmlFor="phone"></label>
              <input type="name" className="inputFields" id="from_phone" name="from_phone" placeholder="Telefone" onInput={(e) => onPhoneChange(e.target.value)} value={phone} required></input>
            </li>
            <li>
              <label htmlFor="email"></label>
              <input type="email" className="inputFields" id="from_email" name="from_email" placeholder="Email" onInput={(e) => onMailChange(e.target.value)} value={mail} required></input>
            </li>
            <li>
            <label htmlFor="message"></label>
            <textarea className="inputFields" name="messages" placeholder="Escreva Sua Mensagem..."/>
            </li>
            <li id="center-btn">
              <input type="submit" id="join-btn" name="join" alt="Join" value="ENVIAR"/>
            </li>
          </ul>
        </form>
        </Fade>
      </div>
              )
            }

            function mapStateToProps(state){
                console.log(state.rootReducer)
                return{ 
                       name: state.rootReducer.name,
                       phone: state.rootReducer.phone,
                       mail: state.rootReducer.mail,
                    }
             }


            function mapDispatchToProps(dispatch){
                return {
                  onNameChange: function(name){
                    dispatch(setName(name))
                  },
                  onMailChange: function(mail){
                    dispatch(setMail(mail))
                  },
                  onPhoneChange: function(phone){
                    dispatch(setPhone(phone))
                  },
              }
            }

            
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);