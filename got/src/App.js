import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://anapioficeandfire.com/api/characters/`);
    const json = await response.json();

    console.log(json)
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
 



