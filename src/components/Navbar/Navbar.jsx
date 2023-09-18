import React from 'react'
import styles from './Navbar.module.css'
import { links } from './data'
import DarkMode from '@/components/DarkMode/Dark'
import Link from 'next/link'
import Button from '@/components/elements/button/page'
import { Montserrat } from 'next/font/google'
const logofont=Montserrat({
  subsets:['latin'],
  weight :['700']
})

export default function Navbar() {
  return (
    <>
    <div className={styles.container}>
      <Link href="/" className={`${styles.logo} ${logofont.className}`}>SHOP</Link>
        <DarkMode/>
        { links.map(link=>
          <Link className={styles.links} key={link.id} href={link.url}>{link.title}</Link>
        )}
      <Button/>
    </div>
    </>
  )
}
