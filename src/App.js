import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route>

          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
