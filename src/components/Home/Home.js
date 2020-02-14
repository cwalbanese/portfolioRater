import React from "react";

import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Home(props) {
	const { ports, user } = props;
	let portElems = ports.map(port => {
		let comments = port.posts.map(comment => {
			return <li>{comment}</li>;
		});
		return (
			<div key={port._id}>
				<img src={port.imageUrl} />
				<br />
				<h4>{port.name}</h4>
				<h3>{port.title}</h3>
				<p>{port.description}</p>
				<ul>{comments}</ul>
				<a href={port.link}>Visit portfolio</a>
				{user._id === port.userId && (
					<div>
						<Button>Edit</Button>
						<Button>Delete</Button>
					</div>
				)}
			</div>
		);
	});
	if (portElems) {
		return <Container className="Home">{portElems}</Container>;
	} else {
		return <h1>No portfolios found?</h1>;
	}
}

export default Home;
