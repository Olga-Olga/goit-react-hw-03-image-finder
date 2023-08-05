import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';
import React, { Component } from 'react';
import { fetchImages } from './Api';

// axios.defaults.headers.common['Authorization'] = API_KEY;

export class App extends Component {
  state = {
    searchWord: 'world',
    hits: [],
    total: '',
    totalHits: '',
    per_page: 4,
  };

  async componentDidMount() {
    // if (prevState.searchWord !== this.state.searchWord) {

    const { searchWord: q, per_page } = this.state;
    console.log(q, per_page);
    try {
      const res = await fetchImages({ q, per_page });
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
    console.log(this.state);
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
