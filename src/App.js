import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Evenn Registration Form</h1>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
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
                <select>
                  <option>Select type..</option>
                  <option>Regular - 100THB</option>
                  <option>Premium - 300THB</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Add food?</label>
            <div className="control">
              <label className="radio">
                <input type="radio" name="question" />
                <span> Yes</span>
              </label>
              <label className="radio">
                <input type="radio" name="question" />
                <span> No</span>
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />
                <span> I agree to the <a href="#">terms and conditions</a></span>
              </label>
            </div>
          </div>

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
