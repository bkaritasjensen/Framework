import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    var req = new XMLHttpRequest();
    var status = false;

    req.open(
      "GET",
      "https://www.anapioficeandfire.com/api/characters?page=" + "&pageSize=10",
      true
    );

    req.onload = function () {
      if (req.readyState === 4 && req.status === 200) {
        this.setState({ data: req.responseText });
        status = true;
        console.log(req.getResponseHeader("link"));
      } else {
        console.error(req.statusText);
      }
      req.onerror = function () {
        console.error(req.statusText);
      };
    }.bind(this);
    req.send(null);
  }
  render() {
    for (let i = 0; i < this.state.length; i++) {
      return <p>{this.state[i].name}</p>;
    }
    return null;
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
