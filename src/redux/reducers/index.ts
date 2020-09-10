import { combineReducers } from 'redux';
import scheduleDataReducer from './scheduleDataReducer';
import hideColumsReducer from './hideColumnReducer/hideColumnsReducer';

const rootReducer = combineReducers({
    scheduleData: scheduleDataReducer,
    hideColumnData: hideColumsReducer,
});

export default rootReducer;
