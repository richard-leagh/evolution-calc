import { GET_POKEMON_DETAILS } from '../actions/Constants';
import ServerUtil from '../servers/ServerUtil';

const PokeDetailsReducer = (state=[],action) => {
	switch(action.type) {
		case GET_POKEMON_DETAILS:
			return ServerUtil.getPokemonDetails();
		default:
			return state;
	}
};

export default PokeDetailsReducer;