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
    per_page: 20,
    page: 1,
    isLoading: true,
    showButton: false,
  };

  componentDidMount() {
    console.log(this.state.hits.length);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchWord !== this.state.searchWord ||
      this.state.page !== prevState.page
    ) {
      console.log(this.state.searchWord.length);
      const { searchWord: q, per_page, page } = this.state;
      try {
        console.log(this.state.hits.length);
        this.setState({ showButton: false });
        const res = await fetchImages({ q, per_page, page });
        this.setState({
          hits:
            this.state.page === 1 ? res.hits : [...prevState.hits, ...res.hits],
          total: res.total,
          totalHits: res.totalHits,
          page,
          showButton:
            page >= res.totalHits / per_page || res.total === 0 ? false : true,
        });
        console.log(res.total);
        console.log(this.state.per_page);
      } catch {
        console.log('catch');
      } finally {
      }
    }
  }

  handleSearchInput = word => {
    if (!word) {
      alert('Enter something!');
      return;
    }
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
        {this.state.showButton && (
          <Button
            buttonStatus={this.isLoading}
            onPageUpload={this.onPageUpload}
          />
        )}
      </div>
    );
  }
}
