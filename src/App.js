import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Api from './Api/Api';
import Index from './Index/Index'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
			<Router>
      	<div className="App">
        	<header className="App-header">
          	<img src={logo} className="App-logo" alt="logo" />
          	<h2>Welcome to React</h2>
					</header>
					<div className="App-intro">
						A very simple react application, Click either of the links below
					</div>
					
					<nav>
						<Link to="/" className="btn btn-primary">Index</Link>
						<Link to="/api" className="btn btn-primary">Api</Link>
					</nav>
				
					<Route exact={true} path="/" component={Index} />
					<Route path="/api" component={Api} />
      	</div>
			</Router>
    );
  }
}

export default App;
