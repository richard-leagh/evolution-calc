import React from 'react';

const PokeSelectForm = ({
	options,
	handleChange
}) => {

	return(
		<div>
			<form>
			<label>Select Pokemon</label>
			<select className="pokeDropdown" onChange={(e) => handleChange(e)}>
				<option disabled selected value>Select a value</option>
				{options.map(o => 
					<option value={o.name}>{o.name}</option>
				)} 
			</select>
			</form>
		</div>
	);

};

export default PokeSelectForm;