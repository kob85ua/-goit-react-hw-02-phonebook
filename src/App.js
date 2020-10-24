import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ContactList from "./components/ContactList";
import InputBlock from "./components/InputBlock";
import SearchForm from "./components/SearchForm";
import {AppWrapper} from "./components/Styles"
class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: [],
    filter: "",
  };

  changeFilter = (filter) => {
    console.log(filter);
    this.setState({ filter });
  };

  findContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  addContact = (contactName, contactNumber) => {
    const existContact = this.state.contacts.find(
      ({ name }) => name === contactName
    );
    if (contactName==="" || contactNumber==="") {alert(`Fill in all fields`)}
    else if (existContact !== undefined) {
      alert(`${existContact.name} is already in contacts`);
    } else {
      const contact = {
        name: contactName,
        number: contactNumber,
        id: uuidv4(),
      };
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.findContacts();

    return (
      <AppWrapper>
        <h2>Phonebook</h2>
        <InputBlock onAddContact={this.addContact}></InputBlock>
        <h2>Contacts</h2>
        <SearchForm
          value={filter}
          onFindContacts={this.changeFilter}
        ></SearchForm>
        <ContactList
          phoneContacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </AppWrapper>
    );
  }
}

export default App;
