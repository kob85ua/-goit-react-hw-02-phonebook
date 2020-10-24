import React from "react";
import { Button, List, ListItem } from "./Styles";
const contactList = ({ phoneContacts, onDeleteContact }) => (
  <List>
    {phoneContacts.map((phoneContact) => (
      <ListItem key={phoneContact.id}>
        {phoneContact.name}: {phoneContact.number}
        <Button onClick={() => onDeleteContact(phoneContact.id)}>Delete</Button>
      </ListItem>
    ))}
  </List>
);

export default contactList;
