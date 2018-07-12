import YTSearch from 'youtube-api-search'
const API_KEY = "AIzaSyBp9MZyX89ZverdCOtdXzVl5KhuJr2Iq3I";
import {Actions} from 'react-native-router-flux'

export function setSearchText(data){
    console.log("action executed")
    console.log(data)
    return {
        type:"searchText",
        payload: data
    }
}

export function videosList(){
    return dispatch => {
        YTSearch({key : API_KEY, term : "I don't know "}, (videos) => {
            dispatch ({
                type:"VideosList",
                payload: videos
            })
            Actions.pageTwo()
            
            
        })
    }
    
}

export function selectedVideo(video){
    Actions.pageThree();
    
    return {
        type:"SELECTED_VIDEO",
        payload:video
    }
}