export default function loginReducer(state=null, action){
    switch(action.type){
        case 'LOGIN_USER':
            if(action.payload.id){
                return state = true;
            }
            return state;
        case 'LOGOUT_USER':
            return state = false;
        default:
            return state;
    }
}