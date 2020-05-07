import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    let itemsArr = [];

    for (let i = 0; i < 5; i++) {
      const data = await fetch(
        `https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`
      ).then((res) => res.json());
      itemsArr.push.apply(itemsArr, data);
    }

    console.log(itemsArr);

    this.setState({ data: itemsArr });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map((el) => {
            console.log(el);

            return <li>{el.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
