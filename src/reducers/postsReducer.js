export default function postsReducer(state=[], action){
    switch(action.type){
        case 'GET_LASTED_POSTS':
            return state = action.payload;
        default:
            return state;
    }
}
