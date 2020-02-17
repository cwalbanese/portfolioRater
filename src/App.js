import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

import Create from "./components/Create/Create";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Update from "./components/Update/Update";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: {},
			selectedPortfolio: {},
			portfolios: []
		};
	}
	updateCurrentUser = user => {
		this.setState({
			currentUser: user
		});
	};
	componentDidMount() {
		//fetch all portfolios to apss to Home
		fetch("https://portfolio-rater.herokuapp.com/api/portfolios")
			.then(response => response.json())
			.then(data => this.setState({ portfolios: data }))
			.catch(console.error);
	}
	render() {
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
						<Route
							path="/update/:id"
							render={props => <Update match={props.match} />}
						/>
						<Route
							exact
							path="/"
							render={() => (
								<Home
									ports={this.state.portfolios}
									user={this.state.currentUser}
								/>
							)}
						/>
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
