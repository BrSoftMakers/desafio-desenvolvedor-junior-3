import { useState } from "react";
import blogFetch from "../../axios/config";

const SignupForm = () => {

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSignup = async (e) => {
        e.preventDefault()

        if(email === confirmEmail && password === confirmPassword){
            try{
                await blogFetch.post('/register',{
                    email,
                    password
                }).then(() => {
                    alert('Success')
                    window.location.assign("/");
                })
            }catch(err){
                console.log(err)
            }
        }

        console.log(email,confirmEmail,password,confirmPassword)
    }

    return(
        <>
        <form action="http://localhost:8000/signup" method="post">
            <h1>Sign-up</h1>

            <input 
            type="email"
            placeholder="Email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            />

            <input 
            type="email"
            placeholder="Confirm your email"
            id="confirm-email"
            required
            onChange={(e) => setConfirmEmail(e.target.value)}
            />

            <input 
            type="password"
            placeholder="password"
            id="password" 
            required
            onChange={(e) => setPassword(e.target.value)}
            />

            <input 
            type="password"
            placeholder="confirm-password"
            id="confirm-password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button onClick={(e) => handleSignup(e)}>Submit</button>

        </form>
        </>
    )
};

export default SignupForm;