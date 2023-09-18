"use client"
import React from 'react'
import styles from './page.module.css'

export default function button() {
  return (
    <button 
    className={styles.logout}
    onClick={()=>{console.log(logout)}}
    >
        Logout
    </button>
  )
}
