import { connect } from 'react-redux';
import actions from '../actions/Actions';
import CurrentInfo from '../components/CurrentInfo';

const mapStateToProps = (state) => {
	return {
		pokemon : state.PokeReducer
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		calculate : (pHeld,cHeld,eReq) => {
			dispatch({
				type : actions.CALCULATE,
				pokeHeld : pHeld,
				candyHeld : cHeld,
				evolutionRequirement : eReq
			});
		}
	};
}

const VisibleCurrentInfo = connect(mapStateToProps,
	mapDispatchToProps)(CurrentInfo);

export default VisibleCurrentInfo;	