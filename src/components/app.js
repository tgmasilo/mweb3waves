import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // state = {};
    render() {
        return(
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Alert" onClick={() => { alert("Clicked!"); }}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));