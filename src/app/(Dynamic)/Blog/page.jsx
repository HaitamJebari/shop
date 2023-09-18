import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"

export default function blog() {
    return (
        <div className={styles.MainContainer}>
            <Link href='/Blog/id' className={styles.post}>
                <div className={styles.imageContainer}>
                    <Image
                       className={styles.image}
                       src={"https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg"}
                       width={350}
                       height={250}
                       alt="post image" 
                    />
                </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Post Title</h1>
                        <p className={styles.text}>Post text</p>
                    </div>
                
            </Link>
            <Link href='/Blog/id' className={styles.post}>
                <div className={styles.imageContainer}>
                    <Image
                       className={styles.image}
                       src={"https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg"}
                       width={350}
                       height={250}
                       alt="post image" 
                    />
                </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>Post Title</h1>
                        <p className={styles.text}>Post text</p>
                    </div>
                
            </Link>
        </div>
      
    )
  }