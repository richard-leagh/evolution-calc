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
			dispatch(actions.CALCULATE(pHeld,cHeld,eReq));
		}
	};
}

const VisibleCurrentInfo = connect(mapStateToProps,
	mapDispatchToProps)(CurrentInfo);

export default VisibleCurrentInfo;	