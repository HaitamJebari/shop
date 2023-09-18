"use client"
import { useContext } from 'react'
import styles from './Dark.module.css'
import { ThemeContext } from '@/components/Context/Themecontext'
export default function Dark() {
   const { mode,toggle }=useContext(ThemeContext)
  return (
   <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌚</div>
      <div  
      className={styles.switcher} 
      style={mode==='light'?{left :'2px'}:{right:'2px'}}
      />
   </div>  
)
}
 