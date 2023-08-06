import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';
import React, { Component } from 'react';
import { fetchImages } from './Api';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
// axios.defaults.headers.common['Authorization'] = API_KEY;

export class App extends Component {
  state = {
    searchWord: 'world',
    hits: [],
    total: '',
    totalHits: '',
    per_page: 4,
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchWord !== this.state.searchWord ||
      this.state.page !== prevState.page
    ) {
      const { searchWord: q, per_page, page } = this.state;
      try {
        const res = await fetchImages({ q, per_page, page });
        this.setState({
          hits:
            this.state.page === 1 ? res.hits : [...prevState.hits, ...res.hits],
          total: res.total,
          totalHits: res.totalHits,
          page,
        });
      } catch {
        console.log('catch');
      }
    }
  }

  handleSearchInput = word => {
    if (word !== this.state.searchWord) {
      this.setState({ searchWord: word, page: 1 });
    }
  };

  onPageUpload = async () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
    const { searchWord: q, per_page, page } = this.state;
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchInput} />
        <ImageGallery
          total={this.state.total}
          hits={this.state.hits}
          totalHits={this.state.totalHits}
        />

        {/* <ImageGalleryItem
          total={this.state.total}
          hits={this.state.hits}
          totalHits={this.state.totalHits}
        /> */}
        <Button onPageUpload={this.onPageUpload} />
      </div>
    );
  }
}
