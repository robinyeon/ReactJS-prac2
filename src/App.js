import { useEffect, useState } from 'react';
import './App.css';

const bye = () => {
  console.log("Bye bye :(")
}

const Hello = () => {
  useEffect(() => {
    console.log("I'm here!");
    return bye;
  }, [])
  return <h1>Hello guys :)</h1>
}


function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(cur => !cur)
  return (
    <div className="App">
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
