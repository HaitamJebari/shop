import Image from "next/image"
import styles from "./page.module.css"

export default function post() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
           <div className={styles.info}>
              <h1 className={styles.title}>Title</h1>
              <p className={styles.desc}>PARA</p>
           </div>
           <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg"
              alt="post image"
              fill={false}
            />
            <span className={styles.author}>Haitam jebari</span>
           </div>
      </header>
      <div className={styles.content}>
           <p className={styles.text}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut aspernatur dolor eos labore ad illo, error illum facilis, voluptatem, possimus esse consectetur quod quasi nam eius ullam suscipit obcaecati. Fugiat dicta optio, atque soluta vero perferendis autem numquam earum culpa quas nesciunt ratione fugit! Labore illo quod ipsum exercitationem.
           </p>
      </div>
    </div>
  )
}
