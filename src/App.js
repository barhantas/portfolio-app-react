import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { AppWrapper } from './components/StyledComponents';

function App(props) {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} {...props} />
          <Route exact path="/about" component={About} {...props} />
          <Route exact path="/work" component={Work} {...props} />
          <Route exact path="/projects" component={Projects} {...props} />
          <Route exact path="/contact" component={Contact} {...props} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
