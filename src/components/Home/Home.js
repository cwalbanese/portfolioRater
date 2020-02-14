import React from "react";

// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Home(props) {
	console.log(props);
	const { ports, user } = props;
	let numPorts = 0;
	let portElems = ports.map(port => {
		return (
			<div key={port._id}>
				<img src={port.imageUrl} />
				<br />
				<h4>{port.name}</h4>
				<h3>{port.title}</h3>
				<p>{port.description}</p>
				<a href={port.link}>Visit portfolio</a>
			</div>
		);
	});
	if (ports[0]) {
		return <Container>{portElems}</Container>;
	} else {
		return <h1>No portfolios found?</h1>;
	}
}

export default Home;
