import React from 'react'
import classes from './SignupPage.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import URL from './backend_server_url'

function SignupPage() {
  const [signupUserData, setsignupUserData] = useState({
    signupUsername: '',
    signupPassword: '',
  })
  const usenavigate = useNavigate()

  async function submitSignupHandler(event) {
    event.preventDefault()
    const response = await fetch(`${URL}/registration`, {
      method: 'POST',
      body: JSON.stringify(signupUserData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status !== 200) {
      alert('User exists!')
      usenavigate('/')
    } else {
      alert('Sucsess! Please log in.')
      usenavigate('/')
    }
  }

  function inputChangeHandler(text, name) {
    setsignupUserData({ ...signupUserData, [name]: text })
  }

  return (
    <>
      <form className={classes.formsignup} onSubmit={submitSignupHandler}>
        <div className={classes.control}>
          <input
            type="text"
            required
            placeholder="  Username"
            value={signupUserData.signupUsername}
            onChange={(event) =>
              inputChangeHandler(event.target.value, 'signupUsername')
            }
          />
        </div>
        <div className={classes.control}>
          <input
            type="password"
            autoComplete="off"
            required
            placeholder="  Password"
            value={signupUserData.signupPassword}
            onChange={(event) =>
              inputChangeHandler(event.target.value, 'signupPassword')
            }
          />
        </div>
        <div className={classes.actions}>
          <button type="submit"> Sign up </button>
        </div>
      </form>
    </>
  )
}

export default SignupPage
