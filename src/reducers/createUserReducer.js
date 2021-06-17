export default function createUserReducer(state={}, action){
    switch(action.type){
        case 'CREATE_USER':
            return state = action.payload;
        case 'SAVE_EMAIL':
            return state = action.payload;
        default:
            return state;
    }
}
