import React from 'react';

export default ({label, value, type = "text", placeholder, onChange, error, icon}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className={`control${icon ? " has-icons-left" : ""}${error ? " has-icons-right" : ""}`}>
      <input className={"input"+(error ? " is-danger" : "")} type={type} placeholder={placeholder}
        value={value}
        onChange={onChange} />
      { icon && <span className="icon is-small is-left">
        <i className={`fas fa-${icon}`}></i>
      </span> }
      { error && <span className="icon is-small is-right">
        <i className="fas fa-exclamation-triangle"></i>
      </span>}
    </div>
    { error && <p className="help is-danger">{error}</p> }
  </div>
)
