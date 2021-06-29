export default function loginReducer(state=null, action){
    switch(action.type){
        case 'LOGIN_USER':
            if(action.payload.token){
                return state = action.payload;
            }
            return state;
        case 'LOGOUT_USER':
            return state = false;
        case 'SET_BIO':
            state.bio = action.payload[0];
            return state;
        case 'SET_IMG':
            state.img = action.payload;
            return state;
        case 'SET_FILENAME':
            state.filename = action.payload;
            return state;
        default:
            return state;
    }
}
