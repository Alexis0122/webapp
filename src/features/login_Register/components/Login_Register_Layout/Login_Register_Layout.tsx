import React from 'react'
import './style.css'
import { Logo, Vector1, Vector2, Shapes, LoginIcon, RegisterIcon } from '@/assets/Login'
const LoginAndRegisterLayout: React.FC = () => {
  return (
    <div className='register-layout'>
      <div className='overlap'>
        <div className='overlap-group'>
          <Vector1 className='vector' />
          <Vector2 className='vector-2' />
          <Logo className='comp-icologo' />
          <Shapes className='comp' />
          <div className='comp-icoapplogoicon'>
            {/* <LoginIcon className="filing-system-amico" /> */}
            <RegisterIcon className='filing-system-amico' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginAndRegisterLayout
