import React from 'react'



const Authenticate = (props) => {
    const handleClick = async () => {
       try {
        console.log(props.token)
        const result = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {headers: { 
        // "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}` 
        }})
        
        
       } catch (err) {
        console.log(err.message)
       } 
        
    }
   return (
    <button 
        onClick = {handleClick} 
    >
        Authenticate Token
    </button>
   )
    

}





export default Authenticate