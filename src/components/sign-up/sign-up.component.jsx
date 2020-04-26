import React, {Component} from 'react'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmedPassword: ''
        }
    }

    handleSubmit = async event => {
      event.preventDefault();
        const {displayName, email, password, confirmedPassword}  = this.state;

        if(password !== confirmedPassword) {
            alert("Passowrd don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmedPassword: ''
            })

        }catch (e) {
            console.log('Error: ',e);
        }
    };
    handleChange = event => {
      const {name, value} = event.target;

      this.setState({[name]: value})
    };
    render() {
        const {displayName, email, password, confirmedPassword}  = this.state;
        return(
            <div className='sign-up'>
                <h2>i dont have account</h2>
                <span>Sign up with Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        label='Display Name'
                        type='text'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        name='email'
                        label='Email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                    name='password'
                    label='Password'
                    type='password'
                    value={password}
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput
                        name='confirmedPassword'
                        label='Confirmed Password'
                        type='password'
                        value={confirmedPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'> SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;