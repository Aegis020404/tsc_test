import React, {useState} from 'react';
import Header from "./components/Header";
import Viewer from "./components/Viewer";
import Lists from "./components/Lists";

function App() {
    const [width, setWidth] = useState<number | undefined>(undefined)
    const [height, setHeight] = useState<number | undefined>(undefined)
  return (
    <div
        className="App"
    >
      <div className="container">
          <Header height={height} width={width}/>
          <Viewer setWidth={setWidth} setHeight={setHeight}/>
          <Lists/>
      </div>

    </div>
  );
}

export default App;
