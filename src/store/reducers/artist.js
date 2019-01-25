import * as actionTypes from '../actions/actionTypes';

const initialstate={
  artist:{}
}

export default function(state=initialstate, action){
  switch(action.type){
    case actionTypes.FETCH_ARTISTS_SUCCESS:
    return {
        ...state,
        artist: action.payload.Artists.artists
      };

        case actionTypes.FETCH_ARTIST_SUCCESS:
          return{
            ...state,
            artists:action.payload.artistid.tracks
          };


      default:
    return state
  }
}
