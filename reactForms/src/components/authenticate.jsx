import React, {useState} from 'react'



const Authenticate = (props) => {
    const [successMessage, setSuccessMessage] = useState(null)
    const handleClick = async () => {
       try {
        console.log(props.token)
        const result = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {headers: { 
        // "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}` 
        }})
        const data = await result.json()
        console.log(data.data)
        setSuccessMessage(data.message)
        
       } catch (err) {
        console.log(err.message)
       } 
        
    }
   return (
    <>
        <button 
            onClick = {handleClick} 
        >
            Authenticate Token
        </button>
        {
            successMessage === 'Correctly Authenticated!' ?
            <p id= 'green-paragraph'>{successMessage}</p> :
            <p id='red-paragraph'>You must submit a username and password!</p>
        }
    </>
   )
}





export default Authenticate