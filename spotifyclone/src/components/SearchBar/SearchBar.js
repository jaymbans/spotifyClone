import React from 'react';
import ReactDOM from 'react-dom';
import './Searchbar.css'

export class SearchBar extends React.Component {
  render() {
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton">SEARCH</button>
    </div>
  }
}