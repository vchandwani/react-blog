import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Button } from "react-bootstrap";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const [postsDisplay, setPostsDisplay] = useState([]);
	const [selectedPostId, setSelectedPostId] = useState(null);
	const [displayCount, setDisplayCount] = useState(4);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
			const postsResponse = response.data;
			const updatedPosts = postsResponse.map((post) => {
				return {
					...post,
					author: "Varun",
				};
			});
			setPosts(updatedPosts);
			// console.log( response );
		});
	}, []);

	useEffect(() => {
		setPostsDisplay(posts.slice(0, displayCount));
	}, [posts, displayCount]);

	const postSelectedHandler = (id) => {
		setSelectedPostId(id);
	};

	const loadMore = () => {
		setDisplayCount(displayCount + 4);
	};

	const postsDisplayDiv = postsDisplay.map((post) => {
		return (
			<Post
				key={post.id}
				title={post.title}
				author={post.author}
				content={post.body}
				clicked={() => postSelectedHandler(post.id)}
			/>
		);
	});

	return (
		<>
			<Row>
				<Col xs={12}>
					<h2>Add Articles</h2>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<p>Articles can be added with title and content</p>
				</Col>
			</Row>
			<Row>{postsDisplayDiv}</Row>
			<Row>
				<Col className="LoadMoreDiv">
					<Button
						classes={"LoadMore"}
						variant="secondary"
						onClick={() => loadMore()}
					>
						{" "}
						Load More{" "}
					</Button>
				</Col>
			</Row>
			<Row>
				<FullPost id={selectedPostId} />
			</Row>
			<Row>
				<NewPost />
			</Row>
		</>
	);
};

export default Blog;
