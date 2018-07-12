const videoReducers = (state=[],action) => {
   
        
    switch (action.type){
        
        case 'VideosList' :
        console.log("reducers identify1",action.payload)
            return action.payload;
        default:
        console.log("reducers identify2",action.type)
            return state;
    }
}

export default videoReducers;