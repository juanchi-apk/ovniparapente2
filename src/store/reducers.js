import {EXAMPLE, SET_NAME, SET_MAIL , SET_PHONE}from './actiontypes';


const initialState = {

ejemplo : "pepito",
name: "",
phone:"",
mail: "",

}

export function rootReducer(state = initialState, action) {
switch (action.type) {
        
        case EXAMPLE: 
        return {
            ...state,
        }
        case SET_NAME:
            return{
                ...state,
                name: action.payload.name
            }
        case SET_MAIL:
            return{
                ...state,
                mail: action.payload.mail
            }
         case SET_PHONE:
            return{
                ...state,
                phone: action.payload.phone
                }    
        default:
        return state;

}
}