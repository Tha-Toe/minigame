import './App.css';
import Home from './component/Home';
import {Route,Switch} from "react-router-dom";
import GamePage from './component/GamePage';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path= "/">
          <Home/>
        </Route>
        <Route path = "/GamePage">
          <GamePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
