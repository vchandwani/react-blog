import React, { Component } from "react";

import Blog from "./containers/Blog/Blog";
import Container from "react-bootstrap/Container";

class App extends Component {
	render() {
		return (
			<Container>
				<Blog />
			</Container>
		);
	}
}

export default App;
