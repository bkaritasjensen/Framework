import React from "react";
export default function Cast({ name, gender, culture }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{gender}</h2>
      <h2>{culture}</h2>
    </div>
  );
}
