import { ImageGallery } from './ImageGallery';
import { Searchbar } from './Searchbar';
import React, { Component } from 'react';
import { fetchImages } from './Api';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
import { Circles } from 'react-loader-spinner';
// axios.defaults.headers.common['Authorization'] = API_KEY;

export class App extends Component {
  state = {
    searchWord: 'world',
    hits: [],
    total: '',
    totalHits: '',
    per_page: 20,
    page: 1,
    isLoading: false,
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
      this.setState({ isLoading: true });
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
        this.setState({ isLoading: false });
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
    const { isLoading, hits, totalHits, total } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchInput} />
        {isLoading && (
          <Circles
            height="80"
            width="80"
            color="#05da1e"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}

        <ImageGallery total={total} hits={hits} totalHits={totalHits} />

        {this.state.showButton && <Button onPageUpload={this.onPageUpload} />}
      </div>
    );
  }
}
