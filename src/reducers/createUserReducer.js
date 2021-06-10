export default function createUserReducer(state={}, action){
    switch(action.type){
        case 'CREATE_USER':
            console.log(action);
            return state = action.payload;
        default:
            return state;
    }
}