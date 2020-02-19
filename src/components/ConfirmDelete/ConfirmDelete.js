import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ConfirmDelete(props) {
	return (
		<Modal.Dialog>
			<Modal.Header closeButton>
				<Modal.Title>Are you sure you want to delete?</Modal.Title>
			</Modal.Header>

			<Modal.Footer>
				{props.type === 'portfolio' && (
					<Button
						id={props.id}
						onClick={props.deletePortfolio}
						variant="danger"
					>
						Delete
					</Button>
				)}
				{props.type === 'comment' && (
					<Button
						id={props.id}
						data-index={props.index}
						onClick={props.deleteComment}
						variant="danger"
					>
						Delete
					</Button>
				)}
				<Button onClick={props.handleHide} variant="secondary">
					Cancel
				</Button>
			</Modal.Footer>
		</Modal.Dialog>
	);
}

export default ConfirmDelete;
