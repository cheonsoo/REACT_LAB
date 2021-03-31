import React from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import UsePrevious from './features/UsePrevious';
import InfiniteScroll from './features/InfiniteScroll';

// import CounterTest from "./features/CounterTest";
// import CounterWithReducer from "./features/CounterWithReducer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '200px', height: '50px', border: '1px solid #e9e9e9', borderRadius: '4px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/" onClick={() => {
              console.log("home");
              window.history.pushState({ data: 'pushpush' }, 'title을 pushState로', '/');
            }}>HOME</Link>
          </div>
          <div style={{ width: '200px', height: '50px', border: '1px solid #e9e9e9', borderRadius: '4px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/about" onClick={() => {
              console.log("about");
              window.history.pushState({ data: 'pushpush' }, 'title을 pushState로', '/about')
            }}>ABOUT</Link>
          </div>
          <div style={{ width: '200px', height: '50px', border: '1px solid #e9e9e9', borderRadius: '4px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/usePrevious">Use Previous</Link>
          </div>
          <div style={{ width: '200px', height: '50px', border: '1px solid #e9e9e9', borderRadius: '4px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/product" onClick={() => {
              console.log("product");
              window.history.pushState({ data: 'pushpush' }, 'title을 pushState로', '/product')
            }}>PRODUCT</Link>
          </div>
          <div style={{ width: '200px', height: '50px', border: '1px solid #e9e9e9', borderRadius: '4px', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/infiniteScroll">Infinite Scroll</Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/usePrevious" component={UsePrevious} />
          <Route path="/infiniteScroll" component={InfiniteScroll} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
