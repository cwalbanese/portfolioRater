import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

import Create from './components/Create/Create';
import About from './components/About/About';
import Home from './components/Home/Home';
import Update from './components/Update/Update';
import Login from './components/Login/Login';

import Portfolio from './components/Portfolio/Portfolio';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      users: [],
      selectedPortfolio: {},
      show: false,
    };
  }
  updateCurrentUser = (user) => {
    this.setState({
      currentUser: user,
    });
  };
  logout = () => {
    this.setState({
      currentUser: null,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleHide = () => {
    this.setState({
      show: false,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    e.persist();
    let count = 0;
    fetch('https://portfolio-rater.herokuapp.com/api/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .then(() => {
        for (let i in this.state.users) {
          if (
            this.state.users[i].username === e.target.username.value &&
            count < 1
          ) {
            this.updateCurrentUser(this.state.users[i]);
            count++;
          }
        }
        if (count < 1) {
          this.newUser(e.target.username.value);
          count++;
        }
      })
      .catch(console.error);
  };
  newUser = (username) => {
    const data = { username };
    fetch('https://portfolio-rater.herokuapp.com/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          currentUser: response,
        })
      );
  };

  render() {
    return (
      <div className="App">
        {this.state.show && (
          <Login handleLogin={this.handleLogin} handleHide={this.handleHide} />
        )}
        <nav>
          <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="logo"></img>
          <h2>Portfolio Rater</h2>
          <span className="nav-buttons">
            <Button className="btn btn-secondary">
              <Link className="homeLink" to="/">
                Home
              </Link>
            </Button>
          </span>
          <span className="nav-buttons">
            {this.state.currentUser === null ? (
              <Button onClick={this.handleShow} className="btn btn-secondary">
                Create
              </Button>
            ) : (
              <Button className="btn btn-secondary">
                <Link className="createLink" to="/create">
                  Create
                </Link>
              </Button>
            )}
          </span>
          <span className="nav-buttons">
            <Button className="btn btn-secondary">
              <Link className="aboutLink" to="/about">
                About
              </Link>
            </Button>
          </span>

          {this.state.currentUser === null ? (
            <span className="nav-buttons">
              <Button onClick={this.handleShow} className="btn btn-secondary">
                Login
              </Button>
            </span>
          ) : (
            <span className="nav-buttons">
              <Button onClick={this.logout} className="btn btn-secondary">
                Logout
              </Button>
            </span>
          )}
        </nav>
        <main>
          <Switch>
            <Route
              path="/create"
              render={(props) => (
                <Create user={this.state.currentUser} history={props.history} />
              )}
            />
            <Route path="/about" render={() => <About />} />
            <Route
              path="/update/:id"
              render={(props) => (
                <Update history={props.history} match={props.match} />
              )}
            />
            <Route
              path="/portfolio/:id"
              render={(props) => (
                <Portfolio
                  handleShowLogin={this.handleShow}
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
      </div>
    );
  }
}

export default App;
