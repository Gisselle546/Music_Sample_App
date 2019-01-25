import * as actionTypes from '../actions/actionTypes';

const initialstate={
  search:{}
}

export default function(state=initialstate, action){
  switch(action.type){
    case actionTypes.SEARCH_SUCCESS:
      return{
        ...state,
        search:action.payload.Search.search.data
      };
      default:
    return state
  }
}
