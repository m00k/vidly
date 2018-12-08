import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies().map(m => ({...m, liked: false})),
    pageSize: 4,
    currentPage: 1
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

  handleLiked = movie => {
    const movies = [...this.state.movies];
    const idx = movies.indexOf(movie);
    movies[idx] = { ...movies[idx] };
    movies[idx].liked = !movies[idx].liked;
    this.setState({ movies });
  };

  handlePageChanged = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage, pageSize, movies } = this.state;
    const { length: count } = movies;
    const header = !!count
        ? <h2>Showing {count} movies in the database</h2>
        : <h2>Enter some movies!</h2>;

    const pagedMovies = paginate(movies, currentPage, pageSize);
    return (
      <React.Fragment>
        {header}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pagedMovies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLiked(movie)}>
                  </Like>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={this.handlePageChanged}
        >
        </Pagination>
      </React.Fragment>
    );
  }
}

export default Movies;
