import React from 'react';


class PokeSelectForm extends React.Component {

	componentWillMount() {
		this.props.loadPokemon();
	}

	render() {

		const props = this.props;
		let options = props.options;

		return (
			<div>
				<form>
				<label>Select Pokemon</label>
				<select className="pokeDropdown" onChange={(e) => props.selectPokemon(e.target.value)}>
					<option disabled selected value>Select a value</option>
					{options.map(o => 
						<option key={o.name} value={o.name}>{o.name}</option>
					)} 
				</select>
				</form>
			</div>
		);

	}

}

export default PokeSelectForm;