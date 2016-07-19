import { createStore } from 'redux';
import { combineReducers } from 'redux';
import PokeReducer from '../reducers/PokeReducer';
import CalculateReducer from '../reducers/CalculateReducer';
import PokeDetailsReducer from '../reducers/PokeDetailsReducer';

const combinedApp = combineReducers({
	PokeReducer,
	CalculateReducer,
	PokeDetailsReducer
});

const PokeStore = createStore(combinedApp);

export default PokeStore;