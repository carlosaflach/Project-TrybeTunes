import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputLoginName: '',
      loading: false,
      loaded: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() { // Setting an async funcion based on Écio Ferraz repository
    this.setState({
      loading: true,
    });
    const { inputLoginName } = this.state;
    await createUser({ name: inputLoginName });
    this.setState({
      loading: false,
      loaded: true,
    });
  }

  render() {
    const { inputLoginName, loaded, loading } = this.state;
    const MIN_CHARACTER = 3;
    if (loading) return <Loading />;
    if (loaded) return <Redirect to="/search" />;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="login">
            User:
            <input // Remember to set the initial state, and create a function to update the state.
              type="text"
              placeholder="Name"
              name="inputLoginName"
              id="login"
              data-testid="login-name-input"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              disabled={ inputLoginName.length < MIN_CHARACTER }
              // Source: https://stackoverflow.com/questions/41488715/how-to-disable-button-in-react-js
              // Se o valor armazenado no estado do input for maior que 3 habilita o botão.
              data-testid="login-submit-button"
              onClick={ this.handleClick }
            >
              Entrar
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
