import React from 'react';

const CurrentInfo = ({
pokemon,
calculate
}) => {

let currentInfo = {};

	return (
		<div className="currentInfo">
			<form onSubmit={e => {
				e.preventDefault();
				calculate(currentInfo.heldPokemon.value,currentInfo.heldCandies.value,pokemon.candyRequired);
			}}>
				<label className="heldPokemonText">Current Held {pokemon.name}:  
					<input className="heldPokemonEntry" type="text" ref={node => {
						currentInfo.heldPokemon = node;
					}}/> 			
				</label>
				<label className="heldCandiesText">Current {pokemon.name} Candies Held:
					<input className="heldCandiesEntry" type="text" ref={node => {
						currentInfo.heldCandies = node;
					}}/> 								
					<button className="calculateButton" type="submit">
						Calculate!
					</button>						
 				</label>							
			</form>		
		</div>
	);

}


export default CurrentInfo;
