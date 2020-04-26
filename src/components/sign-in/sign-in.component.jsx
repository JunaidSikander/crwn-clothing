import React, {Component} from "react";
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";
import {auth} from "../../firebase/firebase.utils";

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: '',})
        } catch (e) {
            console.log('error: ',e);
        }


    };

    handleChange = event => {
        const {value , name} = event.target;
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
                    <div className='button'>
                        <CustomButton type='submit'> Submit</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}> Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;