import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Home.css';
import Button from 'react-bootstrap/Button';
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';

function Home(props) {
  const { ports, user } = props;

  function deletePortfolio(e) {
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
  }

  let portElems = ports.map(port => {
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
        <a target="_blank" href={port.link}>
          <Button className="btn btn-secondary">Visit portfolio</Button>
        </a>
        <Button className="btn btn-success"></Button>
        <span className="rating">{port.rating}</span>
        <Button className="btn btn-danger"></Button>
      </div>
    );
  });

  if (portElems) {
    return <div className="main">{portElems}</div>;
  } else {
    return <h1>No portfolios found?</h1>;
  }
}

export default Home;
