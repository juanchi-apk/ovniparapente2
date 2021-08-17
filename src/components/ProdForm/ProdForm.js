import React from 'react';
import "./prodform.scss";
import {setName, setMail ,setPhone} from '../../store/action';
import { connect } from 'react-redux';


const ProdForm = ({onNameChange, onMailChange, onPhoneChange, name, phone , mail})=>   {

    console.log(name + phone + mail)
    return (

         <div className="prodsignupSection">
        
        <form action="mailto:ovnifloripa@gmail.com" method="POST" className="prodsignupForm" name="signupform">
          <h2>SIGN UP</h2>
          <ul className="prodnoBullet">
            <li>
              <label htmlFor="name"></label>
              <input type="text" className="prodinputFields" id="name" placeholder="Name" name="username" onInput={(e) => onNameChange(e.target.value)} value={name} required></input>
            </li>
            <li>
              <label htmlFor="name"></label>
              <input type="name" className="prodinputFields" id="phone" name="phone" placeholder="Phone" onInput={(e) => onPhoneChange(e.target.value)} value={phone} required></input>
            </li>
            <li>
              <label htmlFor="email"></label>
              <input type="email" className="prodinputFields" id="email" name="email" placeholder="Email" onInput={(e) => onMailChange(e.target.value)} value={mail} required></input>
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