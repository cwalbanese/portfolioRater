import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Update extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			portfolio: null
		};
	}
	updatePortfolio(e) {
		e.preventDefault();
		const { name, imageUrl, title, link, description } = e.target;
		let data = {
			name: name.value || null,
			imageUrl: imageUrl.value || null,
			title: title.value || null,
			link: link.value || null,
			description: description.value || null
		};
		fetch("https://portfolio-rater.herokuapp.com/api/portfolios/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			mode: "cors",
			body: JSON.stringify(data)
		}).then(function(response) {
			console.log(response.json());
		});
	}
	componentDidMount() {
		fetch(
			"https://portfolio-rater.herokuapp.com/api/portfolios/" +
				this.props.match.params._id,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
			.then(response => response.json())
			.then(data => this.setState({ portfolio: data }))
			.catch(console.error);
	}
	render() {
		console.log(this.props.match.params);
		return (
			<div className="Update">
				<Container>
					<form onSubmit={this.updatePortfolio}>
						<Row>
							<Col>
								<label htmlFor="name">User name: </label>
								<br />
								<input type="text" id="name" name="name" />
								<br />
								<label htmlFor="imageUrl">Image URL: </label>
								<br />
								<input type="text" id="imageUrl" name="imageUrl" />
							</Col>
							<Col>
								<label htmlFor="title">Title: </label>
								<br />
								<input type="text" id="title" name="title" />
								<br />
								<label htmlFor="link">Portfolio link: </label>
								<br />
								<input type="text" id="link" name="link" />
							</Col>
							<Col>
								<label htmlFor="description">Description: </label>
								<br />
								<input type="text" id="description" name="description" />
								<br />
								<input type="submit" />
							</Col>
						</Row>
					</form>
				</Container>
			</div>
		);
	}
}

export default Update;
