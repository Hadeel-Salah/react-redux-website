import React, { Component } from 'react';
import {searchMovie, fetchMovies, setLoading} from '../../actions/searchActions';
import {connect} from 'react-redux';


export class SearchForm extends Component{
    onChange = e => {
        this.props.searchMovie(e.target.value);
        //state will take the value of any input
        //why actions is capital? 
    };
    onSubmit = e => {
      e.preventDefault();
      this.props.fetchMovies(this.props.text);
      this.props.setLoading();

      
    };
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" />Search Movies, TV Series ...
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search what do you desire"
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-danger">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>({
    text: state.movies.text
});

export default connect(
    
    mapStateToProps,
    {searchMovie,fetchMovies, setLoading}
    )(SearchForm);
