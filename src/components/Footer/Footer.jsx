import Image from 'next/image'
import styles from './footer.module.css'
import {social_media} from './data.js'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>© Shop. All rights reserved.</div>
      <div className={styles.social}>
        {/* <Image
           src="/imgs/icons/facebook.png"
           width={20}
           height={20}
           className={styles.icon}
           alt='Shop Facebook link'
        /> */}
        {social_media.map(social=>
           <Image
           key={social.id}
           src={`/imgs/icons/${social.media}.png`}
           width={20}
           height={20}
           className={styles.icon}
           alt={`Shop ${social.media} link`}
        />
        )}
        
      </div>
    </div>

  )
}
