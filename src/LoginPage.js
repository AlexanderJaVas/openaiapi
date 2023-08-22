import React from 'react'
import classes from './LoginPage.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import URL from './backend_server_url'

function LoginPage() {
  const [userData, setUserdata] = useState({ username: '', password: '' })
  const navigate = useNavigate()

  async function submitLoginHandler(event) {
    event.preventDefault()
    const response = await fetch(`${URL}/authentication`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status !== 200) {
      alert('Wrong username or password!')
      navigate('/')
    } else {
      sessionStorage.setItem('session_username', userData.username)
      navigate('/chat')
    }
  }

  function inputChangeHandler(text, name) {
    setUserdata({ ...userData, [name]: text })
  }

  return (
    <>
      <form className={classes.formlogin} onSubmit={submitLoginHandler}>
        <div className={classes.control}>
          <input
            type="text"
            required
            placeholder="  Username"
            value={userData.username}
            onChange={(event) =>
              inputChangeHandler(event.target.value, 'username')
            }
          />
        </div>
        <div className={classes.control}>
          <input
            type="password"
            autoComplete="off"
            required
            placeholder="  Password"
            value={userData.password}
            onChange={(event) =>
              inputChangeHandler(event.target.value, 'password')
            }
          />
        </div>
        <div className={classes.actions}>
          <button type="submit"> Login </button>
        </div>
      </form>
    </>
  )
}

export default LoginPage
