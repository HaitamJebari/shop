import styles from './page.module.css'
import Image from 'next/image'
import hero from '/public/imgs/hero.svg'

export default function Home() {
  return (
    <div className={styles.container}>
       <div className={styles.col}>
         <h1 className={styles.title}>Your one-stop e-commerce destination</h1>
         <p className={styles.description}>Discover a world of endless shop</p>
         <button className={styles.button}>Shop Now</button>
       </div>
       <div className={styles.col}>
         <Image
            className={styles.img}
            src={hero}
            alt={`Shop link`}
         />
       </div>
    </div>
  )
}
