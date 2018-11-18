const videoReducers = (state=[],action) => {
    switch (action.type){
        
        case 'VideosList' :
            return action.payload;
        default:
            return state;
    }
}

export default videoReducers;