import './assets/css/App.css';
import FudHeader from './components/header/header-container'
import Carrousel from './components/carrousel/carrousel';
import ShopingCart from './components/shopingcart/shopingcart';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

function App({current}) {
  
  return (
    <Router>
      <div className="App">
        <FudHeader/>
        <Switch>
          <Route exact path="/" component={Carrousel}/>  
          <Route exact path="/cart" component={ShopingCart}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
