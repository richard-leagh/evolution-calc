import React from 'react';


const EvolveInfo = ({
	pokeInfo
}) => {

	return (
		<div className="evolutionDetails">
			<label>Candies Required For Evolution : {pokeInfo.candyRequired}</label>
		</div>
	);

};

export default EvolveInfo;