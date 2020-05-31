import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ScrollToTop from './common/ScrollToTop';
import LandingPage from './landing-page/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
