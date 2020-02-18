import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			port: null
		};
	}
	deletePortfolio = e => {
		console.log(e.target.id);
		fetch(
			`https://portfolio-rater.herokuapp.com/api/portfolios/delete/${e.target.id}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		).then(response =>
			response.json().then(json => {
				console.log(json);
			})
		);
	};
	componentDidMount() {
		fetch(
			'https://portfolio-rater.herokuapp.com/api/portfolios/' +
				this.props.match.params.id
		)
			.then(response => response.json())
			.then(data => this.setState({ port: data }))
			.catch(console.error);
	}
	render() {
		console.log(this.state);
		if (this.state.port !== null) {
			const { port } = this.state;
			let comments = port.posts.map(comment => {
				return <li key={comment}>{comment}</li>;
			});
			return (
				<div key={port._id}>
					<Link to={'/portfolio/' + port._id}>
						<img src={port.imageUrl} />
					</Link>
					<br />
					<h4>{port.name}</h4>
					<h3>{port.title}</h3>
					<p>{port.description}</p>
					<ul>{comments}</ul>
					<Button href={port.link}>Visit portfolio</Button>
					{true && (
						<div>
							<Link to={'/update/' + port._id}>
								<Button id={port._id}>Edit</Button>
							</Link>
							<Button id={port._id} onClick={this.deletePortfolio}>
								Delete
							</Button>
						</div>
					)}
				</div>
			);
		} else {
			return <h1>Portfolio not found?</h1>;
		}
	}
}

export default Portfolio;
