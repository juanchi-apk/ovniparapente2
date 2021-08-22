import React from 'react';
import "./contactform.scss";
import {setName, setMail ,setPhone} from '../../store/action';
import { connect } from 'react-redux';



const UserForm = ({onNameChange, onMailChange, onPhoneChange, name, phone , mail})=>   {

    console.log(name + phone + mail);




    return (

       /*  <div classNameName="formContainer">
            <div classNameName="form_title">SE ATREVA A VOAR!
</div>
            <div classNameName="form_input-container">
                <label  classNameName="form_placeholder">Nombre</label>
                <input  classNameName="input" type="text" placeholder=" " />
            </div>
            <div classNameName="form_input-container">
                <label  classNameName="form_placeholder">Apellido</label>
                <input  classNameName="input" type="text" placeholder=" " />
            </div>
            <div classNameName="form_input-container">
                <label  classNameName="form_placeholder">email</label>
                <input  classNameName="input" type="text" placeholder=" " />
            </div>
            <div classNameName="form_input-container">
                <label  classNameName="form_placeholder">telefono</label>
                <input  classNameName="input" type="text" placeholder=" " />
            </div>




        </div> */

        <div className="signupSection">
        
        <form action="mailto:ovnifloripa@gmail.com" method="POST" className="signupForm" name="signupform">
          <h2>AGENDE SEU VÔO HOJE E SINTA O PRAZER DE VOAR!!</h2>
          <ul className="noBullet">
            <li>
              <label htmlFor="name"></label>
              <input type="text" className="inputFields" id="name" placeholder="Name" name="username" onInput={(e) => onNameChange(e.target.value)} value={name} required></input>
            </li>
            <li>
              <label htmlFor="name"></label>
              <input type="name" className="inputFields" id="phone" name="phone" placeholder="Phone" onInput={(e) => onPhoneChange(e.target.value)} value={phone} required></input>
            </li>
            <li>
              <label htmlFor="email"></label>
              <input type="email" className="inputFields" id="email" name="email" placeholder="Email" onInput={(e) => onMailChange(e.target.value)} value={mail} required></input>
            </li>
            <li id="center-btn">
              <input type="submit" id="join-btn" name="join" alt="Join" value="Join"/>
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

            
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);