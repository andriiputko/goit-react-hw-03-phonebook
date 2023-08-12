import { Component } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
import Contacts from './Contacts'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };


  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };


  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    // const { filter } = this.state;

    return (
      <>
        <Form onSubmit={this.addContact} />
        <Contacts  contacts={visibleContacts} onRemoveContact={this.removeContact}/>
      </>
    );
  }
}
