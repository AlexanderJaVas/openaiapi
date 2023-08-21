import React, { useEffect } from 'react'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import classes from './Home.module.css'

const Home = () => {
  useEffect(() => {
    sessionStorage.clear()
  }, [])
  return (
    <>
      <header className={classes.header}>
        <div className={classes.title}>Lowfound OpenAI API Chat</div>
      </header>
      <img src="/pic.png" alt="logo" />
      <div>
        <LoginPage />
        <div className={classes.textbtw}>
          or sign up if you don't have an account yet
        </div>
        <SignupPage />
      </div>
    </>
  )
}

export default Home
