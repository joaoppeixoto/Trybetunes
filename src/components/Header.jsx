import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  state = {
    saveUser: '',
    isLoading: true,
  };

  async componentDidMount() {
    const savegetUser = await getUser();
    this.setState({
      saveUser: savegetUser,
      isLoading: false,
    });
  }

  render() {
    const { saveUser, isLoading } = this.state;
    return (
      <header data-testid="header-component">
        {isLoading ? <Loading />
          : (<div data-testid="header-user-name">{saveUser.name}</div>)}
        <Link data-testid="link-to-search" to="/search">Search</Link>
        <Link data-testid="link-to-favorites" to="/favorites">Favorites</Link>
        <Link data-testid="link-to-profile" to="/profile">Profile</Link>
        <Link data-testid="link-to-album/:id" to="/album">Album</Link>
        <Link data-testid="link-to-profile-edit" to="/profile/edit">Profile Edit</Link>

      </header>
    );
  }
}

export default Header;
