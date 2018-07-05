import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
//import TextFieldGroup from '../common/TextFieldGroup';
//eslint-disable-next-line

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="m-grid m-grid--hor m-grid--root m-page">
			<div className="m-login m-login--signin  m-login--5" id="m_login">
				<div className="m-login__wrapper-1 m-portlet-full-height">
					<div className="m-login__wrapper-1-1">
						<div className="m-login__contanier">
							<div className="m-login__content">
								<div className="m-login__logo">
									<a href="index.html">
										<img src="http://brandmark.io/logo-rank/random/beats.png" alt="logo"/>
									</a>
								</div>
								<div className="m-login__title">
									<h3>
										JOIN OUR GREAT METRO COMMUNITY GET FREE ACCOUNT
									</h3>
								</div>
								<div className="m-login__desc">
									Amazing Stuff is Lorem Here.Grownng Team
								</div>
								<div className="m-login__form-action">
									<button type="button" id="m_login_signup" className="btn btn-outline-focus m-btn--pill">
										Get An Account
									</button>
								</div>
							</div>
						</div>
						<div className="m-login__border">
							<div></div>
						</div>
					</div>
				</div>
				<div className="m-login__wrapper-2 m-portlet-full-height">
					<div className="m-login__contanier">
						<div className="m-login__signin">
							<div className="m-login__head">
								<h3 className="m-login__title">
									Login  Social Connect [5 july]
								</h3>
							</div>
							<form className="m-login__form m-form" onSubmit={this.onSubmit}>
								<div className="form-group m-form__group">
									<input className="form-control m-input" type="email" placeholder="Email" value={this.state.email} name="email" 	onChange={this.onChange}
			error={errors.email} autoComplete="off"/>
								</div>
                

								<div className="form-group m-form__group">
									<input className="form-control m-input m-login__form-input--last" type="password" placeholder="Password" value={this.state.password} 	onChange={this.onChange}
			error={errors.password} name="password"/>
								</div>
								<div className="row m-login__form-sub">
									<div className="col m--align-left">
										<label className="m-checkbox m-checkbox--focus">
											<input type="checkbox" name="remember"/>
											Remember me
											<span></span>
										</label>
									</div>
									<div className="col m--align-right">
										<a href="abc.html" id="m_login_forget_password" className="m-link">
											Forget Password ?
										</a>
									</div>
								</div>
								<div className="m-login__form-action">
									
                  <input type="submit" id="m_login_signin_submit"  className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air" value="Sign In" />

								</div>
							</form>
						</div>
						<div className="m-login__signup">
							<div className="m-login__head">
								<h3 className="m-login__title">
									Sign Up
								</h3>
								<div className="m-login__desc">
									Enter your details to create your account:
								</div>
							</div>
							<form className="m-login__form m-form" action="">
								<div className="form-group m-form__group">
									<input className="form-control m-input" type="text" placeholder="Fullname" name="fullname"/>
								</div>
								<div className="form-group m-form__group">
									<input className="form-control m-input" type="text" placeholder="Email" name="email" autoComplete="off"/>
								</div>
								<div className="form-group m-form__group">
									<input className="form-control m-input" type="password" placeholder="Password" name="password"/>
								</div>
								<div className="form-group m-form__group">
									<input className="form-control m-input m-login__form-input--last" type="password" placeholder="Confirm Password" name="rpassword"/>
								</div>
								<div className="m-login__form-sub">
									<label className="m-checkbox m-checkbox--focus">
										<input type="checkbox" name="agree"/>
										I Agree the
										<a href="abc.html" className="m-link m-link--focus">
											terms and conditions
										</a>
										.
										<span></span>
									</label>
									<span className="m-form__help"></span>
								</div>
								<div className="m-login__form-action">
									<button id="m_login_signup_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">
										Sign Up
									</button>
									<button id="m_login_signup_cancel" className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom">
										Cancel
									</button>
								</div>
							</form>
						</div>
						<div className="m-login__forget-password">
							<div className="m-login__head">
								<h3 className="m-login__title">
									Forgotten Password ?
								</h3>
								<div className="m-login__desc">
									Enter your email to reset your password:
								</div>
							</div>
							<form className="m-login__form m-form" action="">
								<div className="form-group m-form__group">
									<input className="form-control m-input" type="text" placeholder="Email" name="email" id="m_email" autoComplete="off"/>
								</div>
								<div className="m-login__form-action">
									<button id="m_login_forget_password_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">
										Request
									</button>
									<button id="m_login_forget_password_cancel" className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom ">
										Cancel
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
