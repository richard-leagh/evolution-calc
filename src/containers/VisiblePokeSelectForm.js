import { connect } from 'react-redux';
import actions from '../actions/Actions';
import PokeSelectForm from '../components/PokeSelectForm';

const mapStateToProps = (state) => {
	return {
		options : state.PokeDetailsReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		selectPokemon : (pokemonName) => {
			dispatch(actions.SELECT_POKEMON(pokemonName));
		},
		loadPokemon : () => {
			dispatch(actions.GET_POKEMON_DETAILS());
		}
	};
}

const VisiblePokeSelectForm = connect(mapStateToProps,
	mapDispatchToProps)(PokeSelectForm);

export default VisiblePokeSelectForm;