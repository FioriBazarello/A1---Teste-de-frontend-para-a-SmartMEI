import { combineReducers } from 'redux';

import jobsReducer from './jobs';

const rootReducer = combineReducers({
  jobsReducer,
});

export default rootReducer;