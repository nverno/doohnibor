import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, demoLogin } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'login',
  // XXX: not currently using
  navLink: <Link to="/signup">sign up instead</Link>,
});

const mapDispatchToProps = (dispatch) => ({
  demoLogin: () => dispatch(demoLogin()),
  processForm: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
