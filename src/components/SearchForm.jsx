import React from "react";
import { Input } from "./Styles";
const SearchForm = ({ value, onFindContacts }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={(e) => onFindContacts(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchForm;
