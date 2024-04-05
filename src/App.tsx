import './App.css';
import { sayHello } from '@examplelib';


function  addlib() {
  return sayHello("Akos");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       learn react
       <br />
       {addlib()}
      </header>
    </div>
  );
}

export default App;
