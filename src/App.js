import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from 'Components/ContactForm/ContactForm';

import './App.css';

export default class App extends Component {
  state = {
    contacts: [],
  };

  addContact = data => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
    };

    if (
      this.state.contacts.find(
        con => con.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${contact.name} is alresdy in contacts`);
      return;
    } else
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact].sort((a, b) =>
          a.name.localeCompare(b.name),
        ),
      }));
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ id, name }) => (
            <li key={id}>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
