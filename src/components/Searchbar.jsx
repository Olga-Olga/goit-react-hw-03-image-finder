import React from 'react';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmitInput = event => {
    event.preventDefault();
    onSubmit(event.target.input.value);
  };

  return (
    <div>
      <header className="searchbar">
        <form onSubmit={handleSubmitInput} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            name="input"
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};
