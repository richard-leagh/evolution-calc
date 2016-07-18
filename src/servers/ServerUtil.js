const ServerUtil = {};

ServerUtil.loadDetails = (pokemonName) => {

	console.log("Going to server for "+pokemonName);

	return {
		name : pokemonName,
		candyRequired : 12
	};	
};

ServerUtil.calculate = (details) => {
	let pokemonHeld = details.pokeHeld;
	let candyHeld = details.candyHeld;
	let evolutionRequirement = details.evolutionRequirement;

	console.log("Going to server with "+pokemonHeld+" "+candyHeld+" "+evolutionRequirement);

	return {
		optimizedPokemon : 5,
		optimizedCandy : 5,
		optimizedResult : 10		
	};
};

export default ServerUtil;