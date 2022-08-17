import React from "react";
import Pet from "./Pet";
import { render } from "react-dom"; // // or ReactDOM.render and then ReactDOM.render at the end of the file

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(
      Pet,
      {
        name: "Lume",
        animal: "Dog",
        breed: "Labrador Retriever",
      },
      "Adopt Me!"
    ),
    React.createElement(
      Pet,
      {
        name: "Perdita",
        animal: "Dog",
        breed: "Pbgv",
      },
      "Adopt Me!"
    ),
    React.createElement(
      Pet,
      {
        name: "Mancha",
        animal: "Dog",
        breed: "Shih Tzu",
      },
      "Adopt Me!"
    )
  );
};

//ReactDOM.render if {ReactDOM} is imported
render(React.createElement(App), document.getElementById("root"));
