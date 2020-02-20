import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ConfirmDelete(props) {
	return (
		<Container className="login">
			<Row>
				<Col></Col>
				<Col>
					<Modal.Dialog className="modal-dialog-centered modal-fade">
						<Modal.Header>
							<Modal.Title>Please enter your user name</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<Form>
								<Form.Group>
									<Form.Label>User name:</Form.Label>
									<Form.Control
										type="text"
										htmlFor="username"
										id="username"
										name="username"
									/>
								</Form.Group>
							</Form>
						</Modal.Body>

						<Modal.Footer>
							<Button onClick={props.handleHide} variant="secondary">
								Cancel
							</Button>
							<Button
								id={props.id}
								onClick={props.deletePortfolio}
								variant="primary"
							>
								Login
							</Button>
						</Modal.Footer>
					</Modal.Dialog>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
}

export default ConfirmDelete;
