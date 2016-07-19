import { CALCULATE } from '../actions/Constants';
import ServerUtil from '../servers/ServerUtil';

const CalculateReducer = (state={
	optimizedPokemon : 0,
	optimizedCandy : 0,
	optimizedResult : 0
},action) => {

	switch(action.type) {

		case CALCULATE : 
		return ServerUtil.calculate(action);
		default : 
		return state;

	}

};

export default CalculateReducer;