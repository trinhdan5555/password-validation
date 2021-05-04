import '../css/Form.css'
import React, { Component } from 'react';
import { validatePasswordTexts } from '../utils/PasswordValidation'
import { InputField } from './InputField'

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			passwordText: '',
			confirmPasswordText: '',
			validationResultText: ''
		};
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
		this.submit = this.submit.bind(this);
	}
	handlePasswordChange(e) {
		this.setState({ passwordText: e.target.value })
	}

	handleConfirmPasswordChange(e) {
		this.setState({ confirmPasswordText: e.target.value })
	}

	submit() {
		this.setState(
			{ validationResultText: validatePasswordTexts(
				this.state.passwordText, this.state.confirmPasswordText)
			})
	}

	render() {
		return (
			<div>
				<form>
					<InputField
						type="password"
						value={this.state.passwordText}
						onChange={this.handlePasswordChange}
					></InputField>
					<InputField
						type="password"
						value={this.state.confirmPasswordText}
						onChange={this.handleConfirmPasswordChange}
					></InputField>
				</form>
				{ this.state.validationResultText && <label className="vertical">{this.state.validationResultText}</label> }
				<button className="vertical" onClick={this.submit}>Submit</button>
			</div>
		);
	}
}
export default Form;
