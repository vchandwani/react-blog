import React from "react";
import axios from "axios";
import { Col } from "react-bootstrap";

import "./FullPost.css";

const FullPost = (props) => {
	const deletePostHandler = async () => {
		await axios
			.delete("https://jsonplaceholder.typicode.com/posts/" + props.id)
			.then((response) => {
				console.log(response);
			});
	};

	return props.loading ? (
		<p data-test="loading-div" style={{ textAlign: "center" }}>
			Loading...!
		</p>
	) : props.loadedPost.title ? (
		<Col className="FullPost" data-test="loadedPost-div">
			<h6 data-test="loadedPost-title">{props.loadedPost.title}</h6>
			<p data-test="loadedPost-body">{props.loadedPost.body}</p>
			<div className="Edit">
				<button onClick={() => deletePostHandler} className="Delete">
					Delete
				</button>
			</div>
		</Col>
	) : (
		<p data-test="noResult-div" style={{ textAlign: "center" }}>
			Please select a Post!
		</p>
	);
};

export default FullPost;
