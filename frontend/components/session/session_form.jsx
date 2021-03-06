import React, { Component } from 'react';

import LoginFormBody from './login/login_form_body';
import SignupFormBody from './signup/signup_form_body';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // XXX: use camelcase and convert before sending to backend??
      // Something like Jbuilder.key_format, but going the other way?
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.demoLogin();
  }

  handleChange(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    return (
      <div className={`${formType}-form-container`}>
        <form onSubmit={this.handleSubmit} className={`${formType}-form`}>
          {formType === 'login' ? (
            <LoginFormBody
              {...this.state}
              handleChange={this.handleChange}
              demoLogin={this.demoLogin.bind(this)}
            />
          ) : (
            <SignupFormBody {...this.state} handleChange={this.handleChange} />
          )}
        </form>
        {this.renderErrors()}
      </div>
    );
  }
}

export default SessionForm;
