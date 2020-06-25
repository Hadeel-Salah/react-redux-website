// in any reducer, test the action and each action have pram, the first is type then dependen on type it take state and the decond parm is payload is he data cpming fom action
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from '../actions/types';
const initalState = {
    text : '', //user entering
    movies : [], // the search result, json data
    loading :false, //depend on data is coming for app if we enter some search
    movie :[]
}

export default function(state = initalState, action) {
    switch(action.type){
        case SEARCH_MOVIE : 
            return {
                ...state, 
                text :action.payload,
                loading :false
            };
        case FETCH_MOVIES:
            return {
               ...state, 
               movies : action.payload,
               loading :false

                };
        case FETCH_MOVIE:
             return {
               ...state, 
               movie : action.payload,
               loading :false
                  };
        case LOADING:
            return {
                ...state, 
                loading : true,
                  };
            
            default:
                return state;
    }
}