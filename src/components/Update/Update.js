import React from 'react';
import { Link } from 'react-router-dom';
import './Update.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class Update extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			portfolio: null
		};
	}
	updatePortfolio = e => {
		e.preventDefault();
		if (this.state.portfolio) {
			const { name, imageUrl, title, link, description } = e.target;
			const { portfolio } = this.state;
			let data = {
				name: name.value || portfolio.name,
				imageUrl: imageUrl.value || portfolio.imageUrl,
				title: title.value || portfolio.title,
				link: link.value || portfolio.link,
				description: description.value || portfolio.description
			};
			fetch(
				'https://portfolio-rater.herokuapp.com/api/portfolios/update/' +
					portfolio._id,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					mode: 'cors',
					body: JSON.stringify(data)
				}
			).then(
				setTimeout(() => {
					this.props.history.push(`/portfolio/${portfolio._id}`);
				}, 125)
			);
		}
	};
	componentDidMount() {
		fetch(
			'https://portfolio-rater.herokuapp.com/api/portfolios/' +
				this.props.match.params.id
		)
			.then(response => response.json())
			.then(data => this.setState({ portfolio: data }))
			.catch(console.error);
	}
	render() {
		if (this.state.portfolio) {
			var { name, title, description, link, imageUrl } = this.state.portfolio;
		}
		return (
			<div className="Update">
				<Container fluid="true">
					<Row>
						<Col>
							<h2>Edit your portfolio.</h2>
						</Col>
						<Col>
							<div className="form">
								<Form onSubmit={this.updatePortfolio}>
									<Form.Row>
										<Form.Group>
											<Form.Label htmlFor="name">User name: </Form.Label>
											<Form.Control
												type="text"
												id="name"
												name="name"
												placeholder={name}
											/>
										</Form.Group>
										<Form.Group>
											<Form.Label htmlFor="imageUrl">Image URL: </Form.Label>
											<Form.Control
												type="text"
												id="imageUrl"
												name="imageUrl"
												placeholder={imageUrl}
											/>
										</Form.Group>

										<Form.Group>
											<Form.Label htmlFor="title">Title: </Form.Label>
											<Form.Control
												type="text"
												id="title"
												name="title"
												placeholder={title}
											/>
										</Form.Group>
										<Form.Group>
											<Form.Label htmlFor="link">Portfolio link: </Form.Label>
											<Form.Control
												type="text"
												id="link"
												name="link"
												placeholder={link}
											/>
										</Form.Group>

										<Form.Group>
											<Form.Label htmlFor="description">
												Description:{' '}
											</Form.Label>
											<Form.Control
												type="text"
												id="description"
												name="description"
												placeholder={description}
												className="description"
											/>
											<br />
											<Button type="submit" className="btn btn-secondary">
												Submit
											</Button>
										</Form.Group>
									</Form.Row>
								</Form>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Update;
