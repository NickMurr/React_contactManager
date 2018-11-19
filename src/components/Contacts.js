import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
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
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
