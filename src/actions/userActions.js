export function createUser(user){
    return {type: 'CREATE_USER', payload: user};
}

export function loginUser(user){
    return {type: 'LOGIN_USER', payload: user};
}

export function logOutUser(){
    return {type: 'LOGOUT_USER'};
}

export function setLoginBio(value){
    return {type: 'SET_BIO', payload: value};
}

export function saveUserForgotPassword(user){
    return {type: 'SAVE_EMAIL', payload: user};
}
