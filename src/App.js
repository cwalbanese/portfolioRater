import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

import Create from './components/Create/Create';
import About from './components/About/About';
import Home from './components/Home/Home';
import Update from './components/Update/Update';
import Portfolio from './components/Portfolio/Portfolio';
import Button from 'react-bootstrap/Button';

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

	render() {
		return (
			<div className="App">
				<nav>
					<img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="logo"></img>
					<h2>Portfolio Rater</h2>
					<span className="nav-buttons">
						<Button className="btn btn-primary">
							<Link className="homeLink" to="/">
								Home
							</Link>
						</Button>
					</span>
					<span className="nav-buttons">
						<Button className="btn btn-secondary">
							<Link className="createLink" to="/create">
								Create
							</Link>
						</Button>
					</span>
					<span className="nav-buttons">
						<Button className="btn btn-secondary">
							<Link className="aboutLink" to="/about">
								About
							</Link>
						</Button>
					</span>
				</nav>
				<main>
					<Switch>
						<Route
							path="/create"
							render={props => <Create history={props.history} />}
						/>
						<Route path="/about" render={() => <About />} />
						<Route
							path="/update/:id"
							render={props => (
								<Update history={props.history} match={props.match} />
							)}
						/>
						<Route
							path="/portfolio/:id"
							render={props => (
								<Portfolio
									user={this.state.currentUser}
									match={props.match}
									history={props.history}
								/>
							)}
						/>
						<Route
							exact
							path="/"
							render={() => <Home user={this.state.currentUser} />}
						/>
					</Switch>
				</main>
				<footer>
					<p>Created by Chris Albanese, Skyler Bond, and Jarod McGill</p>
				</footer>
			</div>
		);
	}
}

export default App;
