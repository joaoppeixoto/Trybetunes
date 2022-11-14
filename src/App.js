import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Album from './Pages/Album';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import NotFound from './Pages/NotFound';

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
