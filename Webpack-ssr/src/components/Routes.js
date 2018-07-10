import React from 'react';
import { Route, Link } from 'react-router-dom';
import universal from 'react-universal-component';
import { Switch } from 'react-router';
import '../css/nav.css';
import Spinner from './Spinner';

const UniversalComponent = universal(props => import(`./${props.page}`), {
  loading: <Spinner />,
  minDelay: 500
});

export default () => (
  <div>
    <div className="nav">
      <Link to="/">Gallery</Link>
      <Link to="/about">About</Link>
      <Link to="/article/post">Article</Link>
      <Link to="/article/post2">Article2</Link>
    </div>
    <Switch>
      <Route exact path="/">
        <UniversalComponent page="Gallery" />
      </Route>

      <Route
        path="/about"
        render={({ staticContext }) => {
          const site = staticContext
            ? staticContext.site
            : location.hostname.split('.')[0];
          return <UniversalComponent page="About" site={site} />;
        }}
      />
      <Route
        exact
        path="/article/:slug"
        render={({ staticContext, match }) => {
          const site = staticContext
            ? staticContext.site
            : location.hostname.split('.')[0];
          return (
            <UniversalComponent page="Article" site={site} match={match} />
          );
        }}
      />
    </Switch>
  </div>
);
