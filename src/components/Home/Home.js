import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ports: null
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

	like = (id, oldRating) => {
		let rating = oldRating + 1;
		const data = { rating };
		fetch('https://portfolio-rater.herokuapp.com/api/portfolios/update/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			mode: 'cors',
			body: JSON.stringify(data)
		});
		setTimeout(() => {
			window.location.reload();
		}, 125);
	};

	dislike = (id, oldRating) => {
		let rating = oldRating - 1;
		const data = { rating };
		fetch('https://portfolio-rater.herokuapp.com/api/portfolios/update/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			mode: 'cors',
			body: JSON.stringify(data)
		});
		setTimeout(() => {
			window.location.reload();
		}, 125);
	};

	componentDidMount() {
		//fetch all portfolios to pass to Home
		fetch('https://portfolio-rater.herokuapp.com/api/portfolios')
			.then(response => response.json())
			.then(data => this.setState({ ports: data }))

			.catch(console.error);
	}

	render() {
		let portElems;
		if (this.state.ports) {
			portElems = this.state.ports.map(port => {
				let comments = port.posts.map(comment => {
					return <li key={comment}>{comment}</li>;
				});
				return (
					<div key={port._id} className="portfolio">
						<Link to={'/portfolio/' + port._id}>
							<img src={port.imageUrl} alt={port.title} />
						</Link>
						<br />
						<div className="content">
							<h3>{port.name}</h3>
							<h4>{port.title}</h4>
							<p>{port.description}</p>
							<ul>{comments}</ul>
						</div>
						<div className="vote-buttons">
							<Button
								onClick={() => this.like(port._id, port.rating)}
								className="btn btn-success"
							></Button>
							<Button className="btn btn-secondary">{port.rating}</Button>

							<Button
								onClick={() => this.dislike(port._id, port.rating)}
								className="btn btn-danger down"
							></Button>
						</div>
						<div className="port-button">
							<a target="_blank" rel="noopener noreferrer" href={port.link}>
								<Button className="btn btn-secondary">Visit portfolio</Button>
							</a>
							<Link to={'/portfolio/' + port._id}>
								<Button className="btn btn-secondary view">View/Comment</Button>
							</Link>
						</div>
					</div>
				);
			});
		}

		if (portElems) {
			return <div className="main">{portElems}</div>;
		} else {
			return <h1>No portfolios found?</h1>;
		}
	}
}

export default Home;
