import React from 'react';
import "./mobileform.scss";
import {setName, setMail ,setPhone} from '../../store/action';
import { connect } from 'react-redux';

const MobileForm = ({onNameChange, onMailChange, onPhoneChange, name, phone , mail})=>   {

    console.log(name + phone + mail);




    return (

      <div className="mobile_signupSection">
        
        <form action="mailto:ovnifloripa@gmail.com" method="POST" className="mobile_signupForm" name="signupform">
          <h2 className = "formtittle">AGENDE SEU VÔO HOJE E SINTA O PRAZER DE VOAR!!</h2>
            <div>        
                <input type="text" className="mobile_inputFields" id="name" placeholder="Name" name="username" onInput={(e) => onNameChange(e.target.value)} value={name} required></input>
            </div>
            <div>
                <input type="name" className="mobile_inputFields" id="phone" name="phone" placeholder="Phone" onInput={(e) => onPhoneChange(e.target.value)} value={phone} required></input>
            </div>
            <div>
                <input type="email" className="mobile_inputFields" id="email" name="email" placeholder="Email" onInput={(e) => onMailChange(e.target.value)} value={mail} required></input>
            </div>
            <div id="center-btn">
              <input type="submit" id="join-btn" name="join" alt="Join" value="Join"/>
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