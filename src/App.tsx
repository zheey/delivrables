import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/common/ScrollToTop';
import LandingPage from './components/landing-page/LandingPage';
import AllMenuComponent from './components/AllMenuComponent';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/all-menu" component={AllMenuComponent}/>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
