import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Update() {
	function updatePortfolio(e) {
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

	return (
		<div className="Update">
			<Container>
				<form onSubmit={updatePortfolio}>
					<Row>
						<Col>
							<label htmlFor="name">User name: </label>
							<input type="text" id="name" name="name" />
							<label htmlFor="imageUrl">Image URL: </label>
							<input type="text" id="imageUrl" name="imageUrl" />
						</Col>
						<Col>
							<label htmlFor="title">Title: </label>
							<br />
							<input type="text" id="title" name="title" />
							<label htmlFor="link">Portfolio link: </label>
							<input type="text" id="link" name="link" />
						</Col>
						<Col>
							<label htmlFor="description">Description: </label>
							<input type="text" id="description" name="description" />
							<input type="submit" />
						</Col>
					</Row>
				</form>
			</Container>
		</div>
	);
}

export default Update;
