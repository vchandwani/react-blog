import React, { Component } from "react";
import axios from "axios";
import { Col, Button, Form } from "react-bootstrap";

import "./NewPost.css";

class NewPost extends Component {
	state = {
		title: "",
		content: "",
		author: "Varun",
	};

	postDataHandler = () => {
		const data = {
			title: this.state.title,
			content: this.state.content,
			author: this.state.author,
		};
		axios
			.post("https://jsonplaceholder.typicode.com/posts/", data)
			.then((response) => {});
	};

	render() {
		return (
			<Col className="NewPost">
				<Form>
					<Form.Row>
						<Col xs={12}>Add a Post</Col>
						<Form.Group as={Col} md="4" xs="12">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								value={this.state.title}
								onChange={(event) =>
									this.setState({ title: event.target.value })
								}
							/>
						</Form.Group>
						<Form.Group as={Col} md="4" xs="12">
							<Form.Label>Content</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								value={this.state.content}
								onChange={(event) =>
									this.setState({ content: event.target.value })
								}
							/>
						</Form.Group>
						<Form.Group as={Col} md="4" xs="12">
							<Form.Label>Author</Form.Label>
							<Form.Control
								as="select"
								value={this.state.author}
								onChange={(event) =>
									this.setState({ author: event.target.value })
								}
							>
								<option value="Varun">Varun</option>
								<option value="Manu">Manu</option>
							</Form.Control>
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Col xs={12}>
							<Button onClick={this.postDataHandler}>Add Post</Button>
						</Col>
					</Form.Row>
				</Form>
			</Col>
		);
	}
}

export default NewPost;
