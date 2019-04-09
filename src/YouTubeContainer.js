import React, { Component } from 'react';

import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import SearchBar from './SearchBar';

class YouTubeContainer extends Component {

  state = {
  	apiKey: 'AIzaSyCUVIg4sQA5eg8huCRYVHJQSfwElOwenoo',
  	searchTerm : '',
  	video: [],
  	videoId: '',
  	relatedVideos: []
  }

  updateSearchTerm = (e) => {
  	e.preventDefault()

  	this.setState({
  		searchTerm: e.target.value
  	})
  }

  processSearch = (e) => {
  	const term = this.state.searchTerm

  	fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${this.state.apiKey}&q=${term}&type=video`)
  		.then(resp => resp.json())
  		.then(youTubeJSON => {
  		  if(youTubeJSON["items"].length > 0) {
  			this.setState({
  				video: youTubeJSON["items"][0],
  				videoId: youTubeJSON["items"][0]['id']['videoId']
  			})
  		  }
  		})
  		.then(this.renderRelatedVideos)
  	}

  renderRelatedVideos = () => {
  	fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.state.video['id']['videoId']}&type=video&key=${this.state.apiKey}`)
  		.then(resp => resp.json())
  		.then(relatedYouTubeJSON => {
  		  if(relatedYouTubeJSON["items"].length > 0) {
  		  	this.setState({
  		  	  relatedVideos: relatedYouTubeJSON["items"]
  		  	})
  		  }
  		})
  }

  handleRelatedVideoClick = (video) => {
  	this.setState({
  		video: video,
  		videoId: video['id']['videoId']
  	})
  }

  render() {
    return (
      <div className="ui grid container">
      	<SearchBar processSearch={this.processSearch} updateSearchTerm={this.updateSearchTerm} />
      	<VideoDetail videoId={this.state.videoId} video={this.state.video} />
      	<VideoList videos={this.state.relatedVideos} handleRelatedVideoClick={this.handleRelatedVideoClick} />
      </div>
    );
  }

}



export default YouTubeContainer;
