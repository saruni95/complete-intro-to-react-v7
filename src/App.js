import React from "react";
import { render } from "react-dom"; // // or ReactDOM.render and then ReactDOM.render at the end of the file

import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams/>
    </div>
    );
};

//ReactDOM.render if {ReactDOM} is imported. This is used in Platform
render(<App/>, document.getElementById("root"));
