import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputLoginName: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { inputLoginName } = this.state;
    const MIN_CHARACTER = 3;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="inputLoginName">
            User:
            <input // O valor de qualquer variável sempre fica salvo no estado. Lembrar de setar o estado, e a função que modifica o valor.
              type="text"
              name="inputLoginName"
              id="login"
              data-testid="login-name-input"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              disabled={ inputLoginName.length < MIN_CHARACTER }
              // Se o valor armazenado no estado do input for maior que 3 habilita o botão.
              data-testid="login-submit-button"
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
