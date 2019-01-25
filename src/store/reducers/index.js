import { combineReducers } from 'redux';
import artistReducer from './artist';
import searchReducer from './search';

const rootReducer = combineReducers({
  artist: artistReducer,
  search: searchReducer
});

export default rootReducer;
