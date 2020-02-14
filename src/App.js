import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

import Create from "./components/Create/Create";
import About from "./components/About/About";
import Home from "./components/Home/Home";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function App() {
	return (
		<div className="App">
			<nav>
				<Container>
					<Row>
						<Col>
							<Button className="btn btn-primary">
								<Link className="homeLink" to="/">
									Home
								</Link>
							</Button>
						</Col>
						<Col>
							<Button className="btn btn-secondary">
								<Link className="createLink" to="/create">
									Create
								</Link>
							</Button>
						</Col>
						<Col>
							<Button className="btn btn-secondary">
								<Link className="aboutLink" to="/about">
									About
								</Link>
							</Button>
						</Col>
					</Row>
				</Container>
			</nav>
			<main>
				<Switch>
					<Route path="/create" render={() => <Create />} />
					<Route path="/about" render={() => <About />} />
					<Route path="/" render={() => <Home />} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
