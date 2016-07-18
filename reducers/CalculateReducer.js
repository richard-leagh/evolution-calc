import actions from '../actions/Actions';
import ServerUtil from '../servers/ServerUtil';

const CalculateReducer = (state={
	optimizedPokemon : 0,
	optimizedCandy : 0,
	optimizedResult : 0
},action) => {

	switch(action.type) {

		case actions.CALCULATE : 
		return ServerUtil.calculate(action);
		default : 
		return state;

	}

};

export default CalculateReducer;