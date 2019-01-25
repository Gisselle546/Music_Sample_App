import * as actionTypes from './actionTypes';
import axios from '../../axios_instance';

const apikey="ZmYzYzNlMTMtOWYyYS00ODc4LWIyY2QtYjk1Y2FjNTBhMjVh";

export const searchbegin=()=>{
  return{
    type:actionTypes.SEARCH_BEGIN
  }
}

export const searchinput= Search =>{
  return{
    type: actionTypes.SEARCH_SUCCESS,
    payload:{Search}
  }
}

export const searchfailure= error=>{
  return{
    type: actionTypes.SEARCH_FAILURE,
    payload:error
  }
}

export const fetchsearchinput=(q)=>{
  return dispatch=>{
    axios.get(`search?apikey=${apikey}&query=${q}&per_type_limit=12`)
         .then(response=>{
           dispatch(searchinput(response.data))
         })
         .catch( error => {
             dispatch(searchfailure(error))
         } );
  }
}
