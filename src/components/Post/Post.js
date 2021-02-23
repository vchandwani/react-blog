import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import "./Post.css";
import classNames from "classnames";

const Post = (props) => {
	const [characterLength, setCharacterLength] = useState(20);
	const [fullRead, setFullRead] = useState(false);

	const readMore = () => {
		setCharacterLength(255);
		setFullRead(true);
	};

	return (
		<Col
			xs={12}
			sm={4}
			className={"mt-1 mb-1"}
			onClick={props.clicked}
			data-test="post-div"
		>
			<Card className={classNames("PostDiv", fullRead && "Height100")}>
				<Card.Body>
					<Card.Title data-test="post-title">
						{props.title.length > characterLength
							? props.title.substring(0, characterLength)
							: props.title}
					</Card.Title>
					<Card.Text data-test="post-content">
						{props.content.length > characterLength
							? props.content.substring(0, characterLength)
							: props.content}
					</Card.Text>
				</Card.Body>
				<Card.Body>
					<Button
						data-test="post-button"
						className="ReadMore"
						variant="primary"
						onClick={readMore}
					>
						Read more
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Post;
