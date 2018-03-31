import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      ticketType: "",
      isAddedFood: false,
      agreedTerms: false
    };
  }

  onChange(target, event) {
    let obj = {};
    obj[target] = event.target.value;
    this.setState(obj);
  }

  selectIsAddedFood(isAddedFood) {
    this.setState({
      isAddedFood: isAddedFood
    });
  }

  onChangeAgreedTerms(event) {
    this.setState({
      agreedTerms: event.target.checked
    });
  }

  render() {
    let ticketTypes = [{
      key: "regular",
      type: "Regular",
      price: 100
    }, {
      key: "premium",
      type: "Premium",
      price: 300
    }];

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input"
                value={this.state.name}
                onChange={this.onChange.bind(this, "name")} />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email input"
              value={this.state.email}
                onChange={this.onChange.bind(this, "email")} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Ticket Type</label>
            <div className="control">
              <div className="select">
                <select value={this.state.ticketType} onChange={this.onChange.bind(this, "ticketType")}>
                  <option>Select type..</option>
                  {ticketTypes.map(e=>
                    <option value={e.key} key={e.key}>{`${e.type} - ${e.price}THB`}</option>
                  )}
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Add food?</label>
            <div className="control">
              <label className="radio">
                <input type="radio" name="question" checked={this.state.isAddedFood}
                  onClick={this.selectIsAddedFood.bind(this, true)} />
                <span> Yes</span>
              </label>
              <label className="radio">
                <input type="radio" name="question" checked={!this.state.isAddedFood}
                  onClick={this.selectIsAddedFood.bind(this, false)} />
                <span> No</span>
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" checked={this.state.agreedTerms}
                  onChange={this.onChangeAgreedTerms.bind(this)} />
                <span> I agree to the <a href="#">terms and conditions</a></span>
              </label>
            </div>
          </div>

          { this.state.ticketType && <p>Price: {`${ticketTypes.find(e=>e.key === this.state.ticketType).price}THB`}</p> }

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Register</button>
            </div>
            <div className="control">
              <button className="button is-text">Reset</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
