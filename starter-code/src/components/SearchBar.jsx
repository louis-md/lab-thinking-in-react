import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
      search: ""
  }

  updateState = e => {
      this.setState({[e.target.name]: e.target.value})      
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <form onChange={this.updateState}>
          <input type="text" name="search" />
          <p>
            <input type="checkbox" />
            Only show products on stock
          </p>
        </form>
      </div>
    );
  }
}
