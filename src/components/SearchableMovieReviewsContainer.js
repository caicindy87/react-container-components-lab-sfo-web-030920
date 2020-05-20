import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: [],
  };

  fetchReviews = (searchTerm = "ironman") => {
    fetch(URL + `&query=${this.state.searchTerm}`)
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          reviews: data.results,
        })
      );
  };

  componentDidMount() {
    this.fetchReviews();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchReviews(this.state.searchTerm);
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={(e) => this.setState({ searchTerm: e.target.value })}
          ></input>
          <input type="submit" value="Search Movie"></input>
        </form>

        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
