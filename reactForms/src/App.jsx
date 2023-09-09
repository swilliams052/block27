import { useState } from 'react'
import './App.css'
import Authenticate from './components/authenticate'
import SignUpForm from './components/signUpForm'

function App() {
  const [count, setCount] = useState(0)
  const [token, setToken] = useState(null)

  return (
    <>
      <Authenticate
        token={token}
      />
      <SignUpForm 
        setToken={setToken}
      />
    </>
  )
}

export default App
