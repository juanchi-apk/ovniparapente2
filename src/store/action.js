import { EXAMPLE, SET_NAME, SET_MAIL , SET_PHONE}  from "./actiontypes";

export function example(payload= "example"){
    return {type: EXAMPLE, payload: { payload } };
}

export function setName(name){
    return {type: SET_NAME, payload: {name} };
}
export function setMail(mail){
    return {type: SET_MAIL, payload: {mail} };
}
export function setPhone(phone){
    return {type: SET_PHONE, payload: { phone }};
}
