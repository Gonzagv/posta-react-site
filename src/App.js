import React from 'react';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import FaqsPage from './pages/FaqsPage';


import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/faqs" component={FaqsPage} />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
