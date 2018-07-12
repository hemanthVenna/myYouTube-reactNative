const rootReducers = (state="",action) => {
    switch (action.type){
        
        case 'searchText' :
    console.log("reducers identify1",action.type)
        
            return action.payload;
        // case 'VideosList' :
        //     return action.payload;
        default:
    console.log("reducers identify1",action.type)
        
            return state;
    }
}

export default rootReducers;