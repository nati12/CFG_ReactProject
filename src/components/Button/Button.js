import React, {useState} from 'react'

const Button = (props) => {
    const{ message } = props

    const maybeAlert = () => {
        alert('That is sad!')
    }

    const signUpPrompt = () => {
        let name = prompt('Your name')
        prompt('Email')

        document.getElementById('userMsg').innerText = `See you, ${name}!`

    }

    return (
        <div>
            
        
        <button className="button" type="button"
            onClick={maybeAlert}
        >
            <p>No</p>
        </button>

        <button className="button" type="button"
            onClick={signUpPrompt}
        >
            <p>Of course!</p>
        </button>

        </div>
    )
}

export default Button