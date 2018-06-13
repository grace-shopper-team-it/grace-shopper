import React from 'react';
import './AddReview.css';
import axios from 'axios';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      stars: 0,
      productId: 0,
      showAlert: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let productNumber = this.props.match.params.id;
    this.setState({
      productId: productNumber,
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.content.length < 12) {
      this.setState({ showAlert: !this.state.showAlert });
    }
    let newReview = { content: this.state.content, stars: this.state.stars };
    await axios.post(
      `/api/products/${this.state.productId}/reviews`,
      newReview
    );

    this.props.history.push(`/products/${this.state.productId}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ margin: '5%' }}>
        <div className="form-group">
          <label
            htmlFor="exampleFormControlTextarea1"
            style={{ fontSize: '18px' }}
          >
            Write your Review Here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="content"
            onChange={this.handleChange}
          />
          {this.state.showAlert ? (
            <div className="alert alert-danger" role="alert">
              Sorry, your review should be longer
            </div>
          ) : (
            <div />
          )}
        </div>
        <div className="section">
          <fieldset className="rating">
            <input
              type="radio"
              id="star5"
              name="stars"
              value="5"
              onChange={this.handleChange}
            />
            <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
            <input
              type="radio"
              id="star4half"
              name="stars"
              value="4.5"
              onChange={this.handleChange}
            />
            <label
              className="half"
              htmlFor="star4half"
              title="Pretty good - 4.5 stars"
            />
            <input
              type="radio"
              id="star4"
              name="stars"
              value="4"
              onChange={this.handleChange}
            />
            <label
              className="full"
              htmlFor="star4"
              title="Pretty good - 4 stars"
            />
            <input
              type="radio"
              id="star3half"
              name="stars"
              value="3.5"
              onChange={this.handleChange}
            />
            <label
              className="half"
              htmlFor="star3half"
              title="Meh - 3.5 stars"
            />
            <input
              type="radio"
              id="star3"
              name="stars"
              value="3"
              onChange={this.handleChange}
            />
            <label className="full" htmlFor="star3" title="Meh - 3 stars" />
            <input
              type="radio"
              id="star2half"
              name="stars"
              value="2.5"
              onChange={this.handleChange}
            />
            <label
              className="half"
              htmlFor="star2half"
              title="Kinda bad - 2.5 stars"
            />
            <input
              type="radio"
              id="star2"
              name="stars"
              value="2"
              onChange={this.handleChange}
            />
            <label
              className="full"
              htmlFor="star2"
              title="Kinda bad - 2 stars"
            />
            <input
              type="radio"
              id="star1half"
              name="stars"
              value="1.5"
              onChange={this.handleChange}
            />
            <label
              className="half"
              htmlFor="star1half"
              title="Meh - 1.5 stars"
            />
            <input
              type="radio"
              id="star1"
              name="stars"
              value="1"
              onChange={this.handleChange}
            />
            <label
              className="full"
              htmlFor="star1"
              title="Sucks big time - 1 star"
            />
          </fieldset>
        </div>
        <button type="submit" className="btn btn-success">
          Submit your review
        </button>
      </form>
    );
  }
}

export default AddReview;
