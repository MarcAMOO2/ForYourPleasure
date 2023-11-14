import React, { useState } from "react";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import './css/login.css';

function Register() {
    const [email, setEmail] = useState();
    const [displayName, setDisplayName] = useState();
    const [password, setPassword] = useState();
    const supabase = createClient('https://czbesaouzimntuctbook.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6YmVzYW91emltbnR1Y3Rib29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1NjI3OTksImV4cCI6MjAxMDEzODc5OX0.DjE8FbRZXkJwStakhHhRgYsUbIU2gInMdC_ASLb1G7c',
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true
        }
    });

    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

    const handleSubmit = (e) => {
        e.preventDefault()
        submitRegistration();
      };

    const submitRegistration = async () => {        
        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password
            });
            if(data) {
                alert("Successfully created an account!");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <h1>Welcome to the home of edging!</h1>
            <p>To get started, create an account and start edging instantly!</p>

            <form onSubmit={handleSubmit}>
                <div className="loginForm">
                    <label>Email Address: </label><br></br>
                    <input 
                        type="text" 
                        id='email' 
                        placeholder="example@domain.com"
                        onChange={(e) => setEmail(e.target.value)}></input>
                    
                    <br></br>
                    
                    <label>Display Name: </label><br></br>

                    <input 
                        type="text" 
                        id='username' 
                        placeholder="EdgeGod69"
                        ></input><br></br>

                    <label>Password:</label><br></br>
                    <input 
                        type='password' 
                        id='password' 
                        placeholder="" 
                        min={6} 
                        max={32}
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>
                    <input type='checkbox' id='allow'></input><i>I accept the processing of my data and the chance that it may be sold to chinese hackers.</i>
                    <br></br>
                    <input type='submit' onClick={submitRegistration}></input>
                </div>
            </form>
        </>
    );
}

export default Register;