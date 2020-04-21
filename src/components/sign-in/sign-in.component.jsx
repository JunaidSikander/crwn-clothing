import React, {Component} from "react";
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss';
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event =>{
        event.preventDefault();

      this.setState({
          email: '',
          password: '',
      })
    };

    handleChange = event => {
        const {value , name} = event.target;
        console.log(event.target);
        this.setState({ [name]: value })
    };

    render() {
        return(
            <div className='sign-in'>
                <h2>I have already an account</h2>
                <span>Sign in with Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        label='Email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='password'
                        label='Password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'> Submit</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;