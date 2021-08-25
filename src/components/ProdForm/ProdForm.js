import React from 'react';
import "./prodform.scss";
import {setName, setMail ,setPhone} from '../../store/action';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com'


const ProdForm = ({onNameChange, onMailChange, onPhoneChange, name, phone , mail})=>   {

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

         <div className="prodsignupSection">
        
        <form onSubmit={sendEmail} className="prodsignupForm" name="signupform">
          <h2>SIGN UP</h2>
          <ul className="prodnoBullet">
            <li>
              <label htmlFor="name"></label>
              <input type="text" className="prodinputFields" id="from_name" placeholder="Name" name="from_name" onInput={(e) => onNameChange(e.target.value)} value={name} required></input>
            </li>
            <li>
              <label htmlFor="phone"></label>
              <input type="name" className="prodinputFields" id="from_phone" name="from_phone" placeholder="Phone" onInput={(e) => onPhoneChange(e.target.value)} value={phone} required></input>
            </li>
            <li>
              <label htmlFor="email"></label>
              <input type="email" className="prodinputFields" id="from_email" name="from_email" placeholder="Email" onInput={(e) => onMailChange(e.target.value)} value={mail} required></input>
            </li>
            <li>
            <label htmlFor="message"></label>
            <textarea className="prodinputFields" placeholder="Leave a Message" name="message" />
            </li>
            <li id="prodcenter-btn">
              <input type="submit" id="prodjoin-btn" name="join" alt="Join" value="Join"/>
            </li>
          </ul>
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

            
export default connect(mapStateToProps, mapDispatchToProps)(ProdForm);