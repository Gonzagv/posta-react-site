import React from 'react';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Faqs from './components/Faqs';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/faqs" component={Faqs} />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
