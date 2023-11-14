import React, { useState, useEffect } from "react";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import './css/login.css';


function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const supabase = createClient('https://czbesaouzimntuctbook.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6YmVzYW91emltbnR1Y3Rib29rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1NjI3OTksImV4cCI6MjAxMDEzODc5OX0.DjE8FbRZXkJwStakhHhRgYsUbIU2gInMdC_ASLb1G7c',
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true
        }
    });

    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
          setauthenticated(loggedInUser);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        submitRegistration();
      };

    const submitRegistration = async () => {        
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="loginForm">
                    <label>Email Address: </label><br></br>
                    <input 
                        type="text" 
                        id='email' 
                        placeholder="example@domain.com"
                        onChange={(e) => setEmail(e.target.value)}></input>
                    
                    <br></br>
                    
                    <label>Password:</label><br></br>
                    <input 
                        type='password' 
                        id='password' 
                        placeholder="" 
                        min={6} 
                        max={32}
                        onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>
                    <br></br>
                    <input type='submit' onClick={submitRegistration}></input>
                </div>
            </form>
        </>
    );
}

export default Login;