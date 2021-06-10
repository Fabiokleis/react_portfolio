export default function createUserReducer(state={}, action){
    switch(action.type){
        case 'CREATE_USER':
            console.log('action',action.payload);
            state = action.payload;
            console.log('state',state);
            return state;
        default:
            return state;
    }
}