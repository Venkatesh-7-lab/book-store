import './App.css'; 

import { Component } from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/books" component={BookList}></Route>
          <Route exact path="/books/:id" component={BookDetails}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
          <Route exact path="/notfound" component={NotFound}></Route>
          <Route path="" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
