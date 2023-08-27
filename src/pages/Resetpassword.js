import React from 'react'
import CustomInput from '../components/CustomInput'

const Resetpassword = () => {
  return (
    <div className='py-5' style={{background:"white", minHeight:"100vh"}}>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-start'>Reset Password</h3>
        <p className='text-start'>Please Enter your new password.</p>
        <form action=''>
        <CustomInput type="password" label="New Password" id="pass" />
        <CustomInput type="password" label="Confirm Password" id="confirmpass" />
        <button className='border-0 px-3 py-2 text-white fw-bold w-100' type='submit' style={{background:"#7367F0"}}>Send Link</button>
        </form>
    </div>
  </div>
  )
}

export default Resetpassword
