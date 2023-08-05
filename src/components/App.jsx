import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';
import React, { Component } from 'react';
import axios from 'axios';
import { fetchImages } from './Api';

// axios.defaults.headers.common['Authorization'] = API_KEY;

export class App extends Component {
  state = {
    searchWord: 'tree',
    hits: [],
    total: '',
    totalHits: '',
  };

  async componentDidMount() {
    // if (prevState.searchWord !== this.state.searchWord) {
    try {
      const res = await fetchImages();
      console.log('res:');
      console.dir(res);
      this.setState({
        hits: res.hits,
        total: res.total,
        totalHits: res.totalHits,
      });
    } catch {
      console.log('catch');
    }
  }

  handleSearchInput = word => {
    this.setState({ searchWord: word });
  };

  render() {
    return (
      <div>
        <Searchbar search={this.handleSearchInput} />
        <ImageGallery
          total={this.state.total}
          hits={this.state.hits}
          totalHits={this.state.totalHits}
        />
      </div>
    );
  }
}
