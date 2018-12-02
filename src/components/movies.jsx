import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "../components/like";

class Movies extends Component {
  state = {
    movies: getMovies().map(m => ({...m, liked: false}))
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(_ => _._id !== movie._id);
    this.setState({ movies });
  };

  handleLiked = movie => {
    const movies = [...this.state.movies];
    const idx = movies.indexOf(movie);
    movies[idx].liked = !movies[idx].liked;
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    const header = !!count
        ? <h2>Showing {count} movies in the database</h2>
        : <h2>Enter some movies!</h2>;

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
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onLiked={() => this.handleLiked(movie)}>
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
      </React.Fragment>
    );
  }
}

export default Movies;
