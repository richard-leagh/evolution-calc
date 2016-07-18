const actions = {};

const SELECT_POKEMON = 'SELECT_POKEMON';
const CALCULATE = 'CALCULATE';
const GET_POKEMON_DETAILS = 'GET_POKEMON_DETAILS';

actions.SELECT_POKEMON = SELECT_POKEMON;
actions.CALCULATE = CALCULATE;

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