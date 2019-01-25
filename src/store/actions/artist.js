import * as actionTypes from './actionTypes';
import axios from '../../axios_instance';
import apikey from '../../config';


export const fetchArtistsBegin=()=>{
   return{
     type:actionTypes.FETCH_ARTISTS_BEGIN
   }
}

export const fetchArtistsSuccess= Artists =>{
  return{
    type: actionTypes.FETCH_ARTISTS_SUCCESS,
    payload:{Artists}
  }
}

export const fetchArtistsFailure= error =>{
  return{
    type:actionTypes.FETCH_ARTISTS_FAILURE,
    payload:error
  }
}


export const fetchartists = ()=>{
   return dispatch => {
        axios.get(`artists/top?${apikey.apikey}&limit=9`)
            .then( response => {
               dispatch(fetchArtistsSuccess(response.data));
            } )
            .catch( error => {
                dispatch(fetchArtistsFailure(error))
            } );
    };
  }

  export const fetchArtistBegin=()=>{
    return{
      type:actionTypes.FETCH_ARTISTS_BEGIN
    }
  }
  export const fetchArtistSuccess = artistid =>{
    return{
      type:actionTypes.FETCH_ARTIST_SUCCESS,
      payload:{artistid}
    }
  }


  export const fetchArtistFailure = error=>{
    return{
      type:actionTypes.FETCH_ARTIST_FAILURE,
      payload:error
    }
  }

  export const fetchartist = (id)=>{
     return dispatch => {
          axios.get(`artists/${id}/tracks/top?${apikey.apikey}&limit=9`)
              .then( response => {
                 dispatch(fetchArtistSuccess(response.data));
              } )
              .catch( error => {
                  dispatch(fetchArtistFailure(error))
              } );
      };
    }
