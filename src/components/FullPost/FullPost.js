import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";

import "./FullPost.css";

class FullPost extends Component {
	state = {
		loadedPost: null,
	};

	componentDidUpdate() {
		if (this.props.id) {
			if (
				!this.state.loadedPost ||
				(this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
			) {
				axios
					.get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
					.then((response) => {
						// console.log(response);
						this.setState({ loadedPost: response.data });
					});
			}
		}
	}
	deletePostHandler = () => {
		axios
			.delete("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
			.then((response) => {
				console.log(response);
			});
	};

	render() {
		let post = (
			<p data-test="noResult-div" style={{ textAlign: "center" }}>
				Please select a Post!
			</p>
		);
		if (this.props.id) {
			post = (
				<p data-test="loading-div" style={{ textAlign: "center" }}>
					Loading...!
				</p>
			);
		}
		if (this.state.loadedPost && this.state.loadedPost.title) {
			post = (
				<Col className="FullPost" data-test="loadedPost-div">
					<h6>{this.state.loadedPost.title}</h6>
					<p>{this.state.loadedPost.body}</p>
					<div className="Edit">
						<button onClick={this.deletePostHandler} className="Delete">
							Delete
						</button>
					</div>
				</Col>
			);
		}
		return post;
	}
}

export default FullPost;
