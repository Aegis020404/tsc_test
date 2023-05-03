import React from 'react';
import Header from "./components/Header";
import Viewer from "./components/Viewer";
import Lists from "./components/Lists";

function App() {
  return (
    <div className="App">
      <div className="container">
          <Header/>
          <Viewer/>
          <Lists/>
      </div>
    </div>
  );
}

export default App;
