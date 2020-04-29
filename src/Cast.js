import React from "react";

export default function Cast({ name, gender, culture }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, gender),
    React.createElement("h2", {}, culture),
  ]);
}
