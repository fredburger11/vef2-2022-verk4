import React, { Component } from 'react';
import { Button } from './Button.js';
import { Context } from '../User';

export default class Login extends Component {
  state = {
    username: 'admin ',
    password: '123',
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = (loginUser) => async (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    loginUser(username, password);
  }

  render() {
    const { username, password } = this.state;
    return (
      <Context.Consumer>
        {({ loginUser, logoutUser, authenticated }) => {

          if (authenticated) {
            return (
              <Button onClick={logoutUser} size="small" title="Útskrá"></Button>
            );
          }
   
            return (
              <div>
              <Button onClick={this.handleSubmit(loginUser)} size="small" title="Nýskráning"></Button>
              <p>Skrái inn <em>{username}</em><em>{password}</em></p>
              </div>
            );
        }}
      </Context.Consumer>
    );
  }
}
