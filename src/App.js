import React from "react";
import { render } from "react-dom";
import Cast from "./Cast";

const App = () => {
  /*  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Game of Thrones"),
    React.createElement(Cast, {
      name: "Jon Snow",
      gender: "Male",
      culture: "Northmen",
    }),
    React.createElement(Cast, {
      name: "Illifer",
      gender: "Male",
      culture: "",
    }),
    React.createElement(Cast, {
      name: "Denys Arryn",
      gender: "Male",
      culture: "Northmen",
    }),
  ]); */

  return (
    <div>
      <h1>Game of Thrones</h1>
      <Cast name="Jon Snow" gender="Male" culture="Northmen" />
      <Cast name="Illifer" gender="Male" culture="" />
      <Cast name="Denys Arryn" gender="Male" culture="Northmen" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
