export default function loginReducer(state=false, action){
    switch(action.type){
        case 'LOGIN_USER':
            if(action.token){
                return state = true;
            }
            return state;
        case 'LOGOUT_USER':
            // todo:
            // implement logout ...
            return state = false;
        default:
            return state;
    }
}