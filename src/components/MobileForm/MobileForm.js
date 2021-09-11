import React from 'react';
import "./mobileform.scss";
import {setName, setMail ,setPhone} from '../../store/action';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com';

const MobileForm = ({onNameChange, onMailChange, onPhoneChange, name, phone , mail})=>   {

  const serviceid = "service_8qo0hym";
  const templateid= "template_gmy0i5j";
  const userid ="user_sw6HbUkKsPU1z6TnaKssN";

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

      <div className="mobile_signupSection">
        
        <form onSubmit={sendEmail} className="mobile_signupForm" name="signupform">
          <h2 className = "formtittle">AGENDE SEU VÔO HOJE E SINTA O PRAZER DE VOAR!!</h2>
            <div>        
                <input type="text" className="mobile_inputFields" id="name" placeholder="Nome" name="from_name" onInput={(e) => onNameChange(e.target.value)} value={name} required></input>
            </div>
            <div>
                <input type="name" className="mobile_inputFields" id="phone" name="from_phone" placeholder="Telefone" onInput={(e) => onPhoneChange(e.target.value)} value={phone} required></input>
            </div>
            <div>
                <input type="email" className="mobile_inputFields" id="email" name="from_email" placeholder="Email" onInput={(e) => onMailChange(e.target.value)} value={mail} required></input>
            </div>
            <div>
            <textarea className="prodinputFields" placeholder="Escreva Sua Mensagem..." name="message" />
            </div>
            <div id="center-btn">
              <input type="submit" id="join-btn" name="join" alt="Join" value="Enviar"/>
            </div>
        </form>
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

            
export default connect(mapStateToProps, mapDispatchToProps)(MobileForm);