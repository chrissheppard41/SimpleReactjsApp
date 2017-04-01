import React, { Component } from 'react';

import List from './List/List'
import Ajax from './Ajax'

class Api extends Component {
    constructor() {
        super();
        
        this.state = {
            data: []
        };
    }
    
    getApiData() {
        var self = this;
        var call = Ajax("./test.json", "json", "Api-test");
        call.exec().then(function (data) {
            self.setState(data)
        });
    }
    
  render() {
    return (
        <div>
            <h1>My Api simulation</h1>
            <button onClick={this.getApiData.bind(this)}>Get Data</button>
            <List data={this.state.data} />
        </div>
    );
  }
}

export default Api;
