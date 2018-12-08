import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";

const allGenres = { _id: '', name: 'All Genres' };

class Movies extends Component {
  state = {
    genres: [],
    selectedGenre: allGenres,
    movies: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    this.setState({
      genres: [allGenres, ...getGenres()],
      movies: getMovies().map(m => ({...m, liked: false})),
    });
  }

  handleGenreSelect = genre => {
    this.setState({
      selectedGenre: genre,
      currentPage: 1
    });
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(_ => _._id !== movie._id);
    // NOTE (cb): update current page if necessary
    const pageCount = Math.ceil(movies.length / this.state.pageSize);
    const currentPage = pageCount >= this.state.currentPage
      ? this.state.currentPage
      : pageCount;
    this.setState({
      movies,
      currentPage
    });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const idx = movies.indexOf(movie);
    movies[idx] = { ...movies[idx] };
    movies[idx].liked = !movies[idx].liked;
    this.setState({ movies });
  };

  handlePageChanged = page => {
    this.setState({ currentPage: page });
  };

  handleOnSort = sortColumn => {
    this.setState({ sortColumn });
  };

  // NOTE (cb): handle deep path, e.g. genre.name
  getSortValue(obj, path) {
    return path
      .split('.')
      .reduce((a, b) => a[b], obj);
  }

  render() {
    const { currentPage, pageSize, movies, genres, selectedGenre, sortColumn } = this.state;

    const filteredMovies = selectedGenre && selectedGenre._id
      ? movies.filter(movie => movie.genre._id === selectedGenre._id)
      : movies;

    const sortedMovies = [...filteredMovies.sort((a, b) => 
      sortColumn.order === 'asc'
        ? this.getSortValue(a, sortColumn.path) > this.getSortValue(b, sortColumn.path)
        : this.getSortValue(a, sortColumn.path) < this.getSortValue(b, sortColumn.path)
    )];

    const pagedMovies = paginate(sortedMovies, currentPage, pageSize);

    const { length: count } = filteredMovies;
    const header = !!count
        ? <h2>Showing {count} movies in the database</h2>
        : <h2>Enter some movies!</h2>;
    
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          >
          </ListGroup>
        </div>
        <div className="col">
          {header}
          <MoviesTable
            movies={pagedMovies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleOnSort}
          >
          </MoviesTable>
          <Pagination
            itemCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={this.handlePageChanged}
          >
          </Pagination>
        </div>
      </div>
    );
  }
}

export default Movies;
