import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Experience from  '../Experience/Experience';
import Portfolio from  '../Portfolio/Portolio';
import Address from  '../Address/Address';
import Feedback from  '..//Feedback/Feedback';

function routes() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/about" component={AboutMe} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/address" component={Address} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </div>
    </Router>
  );
}

export default routes;
