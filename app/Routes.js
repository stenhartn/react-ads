import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './examples/Nav';
import InfiniteScroll from './examples/InfiniteScroll';

const styles = {
  main: {
    display: 'flex',
  },
  nav: {
    position: 'fixed',
    flexBasis: '125px',
    flex: 1,
    padding: '1rem',
  },
  section: {
    flex: 1,
    paddingLeft: '125px'
  }
};

const Routes = props => {
  return (
    <BrowserRouter>
      <main style={styles.main}>
        <nav style={styles.nav}>
          <Route path="/" component={Nav} />
        </nav>
        <section style={styles.section}>
          <Switch>
            <Route exact path="/InfiniteScroll" component={InfiniteScroll} />
          </Switch>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default Routes;