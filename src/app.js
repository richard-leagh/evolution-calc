import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import PokeSelectForm from './components/PokeSelectForm';
import PokeStore from './stores/PokeStore';
import VisibleCurrentInfo from './containers/VisibleCurrentInfo';
import VisibleEvolveInfo from './containers/VisibleEvolveInfo';
import actions from './actions/Actions';

const options = [
{
	name : 'Pidgey'
},
{
	name : 'Caterpie'
}
];


const handleChange = (e) => {

PokeStore.dispatch({
	type : actions.SELECT_POKEMON,
	value : e.target.value
});

};


const App = () => {
	
	return (
		<div>
			<Header/>	
			<PokeSelectForm options={options} handleChange={handleChange}/>
			<VisibleEvolveInfo/>						
			<VisibleCurrentInfo/>
		</div>
	);

};


const render = () => {
	ReactDOM.render(
		<Provider store={PokeStore}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
};

render();

console.log("hello WOrld");