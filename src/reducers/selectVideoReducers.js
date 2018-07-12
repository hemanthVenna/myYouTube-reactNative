const selectVideoReducers = (state=null,action) => {
    switch(action.type){
        case "SELECTED_VIDEO" : 
        console.log("slected video");
        console.log(action.payload)
           return action.payload;
        default:
           return state
    }
}

export default selectVideoReducers;