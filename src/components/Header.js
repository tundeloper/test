import React from 'react'
import style from './hearder.module.css'
export default function Header() {
  return (
      <div className={style.container}>
          <div className={style.logo}>nairafill</div>
          <div className={style.buttonContainer}>
              <div >
                  <button className={style.button}>Register</button>
              </div>
              <div>
                  <button className={style.button}>login</button>
              </div>
          </div>
    </div>
  )
}
