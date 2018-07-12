import {combineReducers} from "redux";
import rootReducers from './searchReducers';
import videoReducers from './videoReducers';
import selectVideoReducers from './selectVideoReducers'

const youtubeApp = combineReducers({
	item : rootReducers,
	videoListSource: videoReducers,
	selectedVideo: selectVideoReducers
})

export default youtubeApp;