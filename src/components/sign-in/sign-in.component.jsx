import React, {Component} from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {SignInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(){
        super()

        this.state ={
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleSubmit(event){
        event.preventDefault();
        console.log('submitted')
        console.log(this.state)

    }
    handleChange(event){
        
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    label='email'

                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required 
                    />
                    
                    
                    <FormInput 
                    name='password' 
                    type='password'
                    email='password' 
                    label='password'
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    required 
                    />
                    
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn> 
                        Sign In With Google </CustomButton>
                        </div>
                </form>
            </div>
        )
    } 
}
export default SignIn;