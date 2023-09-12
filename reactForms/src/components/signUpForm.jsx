import React from 'react'
import { useState } from 'react'


const SignUpForm = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try { 
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
                method: "POST",
                body: {
                    //key value pairs name are the same
                    //so we can just use the key name once instead of
                    //username: username,
                    //password: password
                    username,
                    password
                }
            })
            const data = await response.json()
            props.setToken(data.token)
            console.log(data)
            
        } catch (err) {
            setError(err.message)
        }
    }


    return (
        <>
            <h2>
                Sign Up!
            </h2>
            {
                error ? <p>{error}</p> : null
            }
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                     <input 
                    value={username} 
                    onChange={
                        (e) => setUsername(e.target.value)
                    }
                    />
                </label>
                <label>
                    Password:
                     <input 
                    type="password" 
                    value={password} 
                    onChange={
                        (e) => setPassword(e.target.value)
                    }
                    />
                </label>
                <button>Submit</button>
            </form>

        </>
    )
}




export default SignUpForm