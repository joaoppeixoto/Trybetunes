import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './Search';
import Login from './tests/Login';
import Album from './Album';
import Favorites from './Favorites';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';
// import { bool } from 'prop-types';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      button: true,

    };
  }

  handleInputCHange = (event) => {
    const { name, type, button } = event.target;
    const value = type === 'button' ? button : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {};

  render() {
    const { name, button } = this.state;
    return (
      <div>
        <p>TrybeTunes </p>
        <BrowserRouter>
          <Login
            handleInputCHange={ this.handleInputCHange }
            state={ {
              name, button,
            } }
            { ...this.state }
            isFormValid={ this.validateForm() }
          />
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
