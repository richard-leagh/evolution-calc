import { SELECT_POKEMON } from '../actions/Constants';
import ServerUtil from '../servers/ServerUtil';

const PokeReducer = (state={
	name : '',
	candyRequired : 0
},action) => {

	switch(action.type) {

		case SELECT_POKEMON : 
		return ServerUtil.loadDetails(action.value);
		default : 
		return state;

	}

};

export default PokeReducer;