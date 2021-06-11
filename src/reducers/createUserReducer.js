export default function createUserReducer(state={}, action){
    switch(action.type){
        case 'CREATE_USER':
            return state = action.payload;
        case 'LOGIN_USER':
            return state = action.payload;
        default:
            return state;
    }
}