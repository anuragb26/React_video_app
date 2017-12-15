import React from 'react';;
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCuM_v7Wstw4Jo-dtkuF8W2zzUnLjoQQQI';
// const App = function(){
// 	return <div>Hi!</div>;
// }

const App = () =>{
	return (
		<div>
			<SearchBar />
		</div>
		);
}

ReactDOM.render(<App />,document.querySelector('.container'));