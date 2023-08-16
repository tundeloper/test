import React from 'react'
import './styles.css'

export default function Auth() {
  return (
    <div className='auth'>
      <div className='formContainer'>
        <div>
        <h1>We've Missed You</h1>
        <p>Kindly signin and get first access to the very best, community and unlock more opportunities.</p>
        </div>
          <form>
              <div>
              <label>Email</label>
              <input type='email'/>
            </div>
            <div>
              <label>Email</label>
              <input type='text'/>
            </div>
            <button className='loginBtn'>LogIn</button>
            </form>
            <div>
              <div className='linkContainer'><a href='https://nairarefill.com/forgot-password' className='link'>Forgot username or aassword?</a></div>
              <a href='https://nairarefill.com/signup'>Don't have an account? <Sign up</a>
            </div>
        </div>
        <div className='imageConainer'>Image</div>
    </div>
  )
}
