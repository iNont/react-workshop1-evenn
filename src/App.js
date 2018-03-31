import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import './App.css';

import { setField, resetForm } from './redux.js';

const CLOSE_TIME = Moment('2018-04-01 12:00');

class App extends Component {
  onChange(target, event) {
    this.props.setField(target, event.target.value);
  }

  selectIsAddedFood(isAddedFood) {
    this.props.setField("isAddedFood", isAddedFood);
  }

  onChangeToggle(target, event) {
    this.props.setField(target, !this.props[target]);
  }

  componentDidMount() {
    this.countdownInterval = setInterval(()=>this.forceUpdate(), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.countdownInterval);
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

    let price = (ticketTypes.find(e=>e.key === this.props.ticketType) || {}).price;

    let duration = Moment.duration(CLOSE_TIME.diff(Moment()));
    let countdown = `${duration.asHours()|0} hours ${duration.minutes()} minutes ${duration.seconds()} seconds`;

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <p>{`Registration will be closed in ${countdown}.`}</p>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input"
                value={this.props.name}
                onChange={this.onChange.bind(this, "name")} />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email input"
              value={this.props.email}
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
                <select value={this.props.ticketType} onChange={this.onChange.bind(this, "ticketType")}>
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
                <input type="radio" name="question" checked={this.props.isAddedFood}
                  onChange={this.onChangeToggle.bind(this, "isAddedFood")} />
                <span> Yes</span>
              </label>
              <label className="radio">
                <input type="radio" name="question" checked={!this.props.isAddedFood}
                  onChange={this.onChangeToggle.bind(this, "isAddedFood")} />
                <span> No</span>
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" checked={this.props.agreedTerms}
                  onChange={this.onChangeToggle.bind(this, "agreedTerms")} />
                <span> I agree to the <a href="">terms and conditions</a></span>
              </label>
            </div>
          </div>

          { this.props.ticketType && <p>Price: {`${price}THB`}</p> }

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Register</button>
            </div>
            <div className="control">
              <button className="button is-text" onClick={this.props.resetForm}>Reset</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(state => state, { setField, resetForm })(App);
