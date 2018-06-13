import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_details";
const API_KEY = "AIzaSyAF8DY0d0njG3dSyafOo5WqY54nVQGDnYo";

//Create a new Compomnent . This component should produce
//some Html

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      seletedVideo: null
    };
    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

//Take this component and put it on the page[in the DOM]

ReactDOM.render(<App />, document.querySelector(".container"));
