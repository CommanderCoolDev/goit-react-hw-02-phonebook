import React, { Component } from 'react';
import shortid from 'shortid';
import s from 'Components/ContactForm/ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
  };

  nameRandomId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="">
          <label>
            Name:
            <input
              htmlFor={this.nameRandomId}
              onChange={this.handleChange}
              value={this.state.name}
              className=""
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <button type="submit" className="">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}
