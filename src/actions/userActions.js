export function createUser(user){
    return {type: 'CREATE_USER', payload: user};
}

export function loginUser(user){
    return {type: 'LOGIN_USER', payload: user};
}