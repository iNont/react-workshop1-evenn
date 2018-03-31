import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import './App.css';
import Input from './components/Input.js';
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

    let isErrorName = /[^\w ]|\d/.test(this.props.name);
    let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isErrorEmail = this.props.email && !emailRegExp.test(this.props.email);

    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <p>{`Registration will be closed in ${countdown}.`}</p>

          <Input label="Name" placeholder="Enter your name" value={this.props.name}
            onChange={this.onChange.bind(this, "name")} error={isErrorName ? "Invalid name.." : "" } />

          <Input label="Email" type="email" placeholder="Enter your email" value={this.props.email} icon="envelope"
            onChange={this.onChange.bind(this, "email")} error={isErrorEmail ? "Invalid email.." : "" } />

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
                <span> Yes (+50THB)</span>
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

          { this.props.ticketType && <p>Price: {`${price + (this.props.isAddedFood ? 50 : 0)}THB`}</p> }

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
