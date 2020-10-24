import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputBlockWrapper, Label, Input, Button } from "./Styles";
class InputBlock extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };
  state = {
    name: "",
    number: "",
  };
  handleChange = ({ target }) => {
    console.log(target.value);
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };
  render() {
    const { name, number } = this.state;
    return (
      <div>
        <InputBlockWrapper onSubmit={this.handleSubmit}>
          <Label>
            <span>Name</span>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            <span>Number</span>
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </InputBlockWrapper>
      </div>
    );
  }
}

export default InputBlock;
