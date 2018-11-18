const rootReducers = (state="",action) => {
    switch (action.type){
        
        case 'searchText' :
            return action.payload;
        // case 'VideosList' :
        //     return action.payload;
        default:        
            return state;
    }
}

export default rootReducers;