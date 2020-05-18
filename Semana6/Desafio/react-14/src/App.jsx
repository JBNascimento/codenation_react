import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      filteredContacts: [],
    };
  }


  async componentDidMount() {
    const response = await fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
    const contacts = await response.json()
    this.setState({ contacts: contacts, filteredContacts: contacts })
  }


  search = (query) => {
    let filteredContacts = []
    if (query) {
      const filterByName = contact => contact.name.toLowerCase().includes(query.toLocaleLowerCase())
      filteredContacts = this.state.contacts.filter(filterByName);
    }

    this.setState({ filteredContacts });
  };


  sortBy = (contacts, filter) => {
    return contacts.sort((a, b) => a[filter] < b[filter] ? -1 : a[filter] > b[filter] ? 1 : 0);
  }


  sort = filter => {
    const sortedContacts = this.sortBy(this.state.filteredContacts || this.state.contacts, filter);
    this.setState({ filteredContacts: sortedContacts });
  }


  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters search={this.search} sort={this.sort} />
        <Contacts data={this.state.filteredContacts || this.state.contacts} />
      </div>
    );
  }
}


export default App;

