/* eslint-disable default-case */
import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@mail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Katren Smith',
        email: 'ksmith@mail.com',
        phone: '222-222-2222'
      },
      {
        id: 3,
        name: 'Henry Jonson',
        email: 'hjohnson@mail.com',
        phone: '444-444-4444'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
