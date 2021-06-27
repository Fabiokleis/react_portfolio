export default function loginReducer(state=null, action){
    switch(action.type){
        case 'GET_TOTAL':
            return state = action.payload;
        default:
            return state;
    }
}
