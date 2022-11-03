import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './Search';
import Login from './tests/Login';
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
        <BrowserRouter>
          <Login />
          <Search />
          <Album />
          <Favorites />
          <Profile />
          <ProfileEdit />
          <NotFound />
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
