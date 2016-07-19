import { SELECT_POKEMON , CALCULATE , GET_POKEMON_DETAILS } from './Constants';

const actions = {};

actions.SELECT_POKEMON = (val) => {
	return {
		type : SELECT_POKEMON,
		value : val
	};
};

actions.CALCULATE = (pHeld,cHeld,eReq) => {
	return {
		type : CALCULATE,
		pokeHeld : pHeld,
		candyHeld : cHeld,
		evolutionRequirement : eReq		
	};
};

actions.GET_POKEMON_DETAILS = () => {
	return {
		type : GET_POKEMON_DETAILS
	}
};

export default actions;