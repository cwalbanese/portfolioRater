import React from 'react';
import './Create.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Create() {
  function postNewPortfolio(e) {
    e.preventDefault();
    const { name, imageUrl, title, link, description } = e.target;
    let data = {
      name: name.value,
      imageUrl: imageUrl.value,
      title: title.value,
      link: link.value,
      description: description.value
    };
    fetch('https://portfolio-rater.herokuapp.com/api/portfolios/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    }).then(function(response) {
      console.log(response.json());
    });
  }

  return (
    <div className="Create">
      <Container fluid="true">
        <Row>
          <Col>
            <h2>Post your portfolio.</h2>
          </Col>
          <Col>
            <div className="form">
              <Form onSubmit={postNewPortfolio}>
                <Form.Row>
                  <Form.Group>
                    <Form.Label htmlFor="name">User name: </Form.Label>
                    <Form.Control type="text" id="name" name="name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="imageUrl">Image URL: </Form.Label>
                    <Form.Control type="text" id="imageUrl" name="imageUrl" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor="title">Title: </Form.Label>
                    <Form.Control type="text" id="title" name="title" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Form.Label htmlFor="link">Portfolio link: </Form.Label>
                    <Form.Control type="text" id="link" name="link" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="description">Description: </Form.Label>
                    <Form.Control
                      type="text"
                      id="description"
                      name="description"
                    />
                    <br />
                    <Button className="btn btn-secondary" type="submit">
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

export default Create;
