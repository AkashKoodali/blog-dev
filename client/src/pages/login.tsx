import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/global/Header'
import LogingForm from '../components/auth/LogingForm'
import LoginSMS from '../components/auth/LoginSMS'

function Login() {
  const [sms, setSms] = useState(false)
  return (
    <>
    <Header/>
    <div>
     {sms ?  <LogingForm/> : <LoginSMS/>}
      <small>
        <span>
          <Link to={'/forgot_password'}>Forgot password?</Link>
        </span>

        <span onClick={()=> setSms(!sms)}>
          { sms ? 'Sign in with password' : 'Sign in with SMS' }
        </span>
      </small>

      <p>
        You don't have an account? 
        <Link to={'/register'}>Register Now</Link>
      </p>
    </div>
    </>
    
  )
}

export default Login