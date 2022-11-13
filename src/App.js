import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './Login';
import Search from './Search';
import Album from './Album';
import Favorites from './Favorites';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>TrybeTunes </p>
        <Switch>
          <Route
            exact
            path="/"
            component={ Login }
          />

          <Route
            exact
            path="/search"
            component={ Search }
          />

          <Route
            exact
            path="/album/:id"
            component={ Album }
          />

          <Route
            exact
            path="/favorites"
            component={ Favorites }
          />

          <Route
            exact
            path="/profile"
            component={ Profile }
          />

          <Route
            exact
            path="/profile/edit"
            component={ ProfileEdit }
          />

          <Route
            exact
            path="/notfound"
            component={ NotFound }
          />
          <NotFound />
        </Switch>
      </div>

    );
  }
}

export default App;
