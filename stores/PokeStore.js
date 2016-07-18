import { createStore } from 'redux';
import { combineReducers } from 'redux';
import PokeReducer from '../reducers/PokeReducer';
import CalculateReducer from '../reducers/CalculateReducer';

const combinedApp = combineReducers({
	PokeReducer,
	CalculateReducer
});

const PokeStore = createStore(combinedApp);

export default PokeStore;