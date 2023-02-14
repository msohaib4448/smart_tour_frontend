import React from 'react'
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword'
import SignIn from '../../components/SignIn/SignIn'
import Signup from '../../components/SignUp/SignUp'

function Home() {
  return (
    <div>
        <SignIn/>
        <Signup/>
        <ForgotPassword/>
    </div>
  )
}

export default Home