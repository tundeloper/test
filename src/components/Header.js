import React from 'react'
import style from './hearder.module.css'
export default function Header() {
  return (
      <div className={style.container}>
          <div className={style.logo}>nairafill</div>
          <div className={style.buttonContainer}>
              <div >
                  <a href='https://nairarefill.com/signup' className={style.button}>Register</a>
              </div>
              <div>
                  <a href='https://nairarefill.com/signin' className={style.buttonLogIn}>Login</a>
              </div>
          </div>
    </div>
  )
}
