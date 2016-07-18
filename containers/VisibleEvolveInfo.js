import { connect } from 'react-redux';
import EvolveInfo from '../components/EvolveInfo';

const mapStateToProps = (state) => {
	return {
		pokeInfo : state.PokeReducer
	}
};

const VisibleEvolveInfo = connect(
	mapStateToProps)(EvolveInfo);

export default VisibleEvolveInfo;	