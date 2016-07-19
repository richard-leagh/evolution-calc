import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import PokeStore from './stores/PokeStore';
import VisibleCurrentInfo from './containers/VisibleCurrentInfo';
import VisibleEvolveInfo from './containers/VisibleEvolveInfo';
import VisiblePokeSelectForm from './containers/VisiblePokeSelectForm';
import actions from './actions/Actions';

const App = () => {
	
	return (
		<div>
			<Header/>	
			<VisiblePokeSelectForm/>
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