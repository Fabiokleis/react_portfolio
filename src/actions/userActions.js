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

export function setUserImgName(value){
    return {type: 'SET_IMG', payload: value};
}

export function setFileName(value){
    return {type: 'SET_FILENAME', payload: value};
}

export function saveUserForgotPassword(user){
    return {type: 'SAVE_EMAIL', payload: user};
}
