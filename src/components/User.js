import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../User.js';


export default class User extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ user, authenticated }) => {

          if (!authenticated) {
            return (<Link to="/login">Innskráning</Link>);
          }

          return (
            <p>Skráður inn sem {user.username}</p>
          );
        }}
      </Context.Consumer>
    );
  }
}

