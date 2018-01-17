import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCuM_v7Wstw4Jo-dtkuF8W2zzUnLjoQQQI';

class App extends Component{

	constructor(props){
		super(props);
		this.state = {videos:[]}	// specify the initial state
		YTSearch({key:API_KEY,term:'surfboards'},
			(videos) => {
				this.setState({videos});	// ES6
			});
	}

	render(){
		return (
		<div>
			<SearchBar />
			<VideoList videos={this.state.videos} />
		</div>
		);
	}
	
}

ReactDOM.render(<App />,document.querySelector('.container'));
