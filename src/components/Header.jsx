import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loading: false,
    };
    this.handleUser = this.handleUser.bind(this);
  }

  componentDidMount() {
    this.handleUser();
  }

  async handleUser() {
    this.setState({
      loading: true,
    });
    const userObj = await getUser(); // Salva o retorno de getUser que é um objeto em uma variável.
    this.setState({
      user: userObj.name,
      loading: false,
    });
  }

  render() {
    const { user, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <header data-testid="header-component">
        <div>
          <h3 data-testid="header-user-name">
            {user}
          </h3>
        </div>
        <nav>
          <div>
            <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
            <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
          </div>
        </nav>
      </header>
    );
  }
}
