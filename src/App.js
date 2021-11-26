import './App.css';
import Header from './components/common/HeaderComponent';
import Catalog from './components/features/demo-catalog/Catalog';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="">
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Catalog}></Route>
              <Route path="/catalog" component={Catalog}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
