import Image from "next/image"
import styles from "./page.module.css"


async function getData(id){
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  if(!res.ok){
     throw new Error('Failed to fetch')
  }
  return res.json()
}

export async function generateMetadata({params}){
  const product = await getData(params.id)
  return{
    title:product.title,
    description:product.description
  }
}


export default async function post({params}) {

    const data=await getData(params.id)


  return (
    <div className={styles.container}>
      <header className={styles.header}>
           <div className={styles.info}>
              <h1 className={styles.title}>{data.title}</h1>
              <p className={styles.desc}>{data.description}</p>
           </div>
           <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={data.thumbnail}
              alt={data.title}

              fill={true}
            />
            <span className={styles.author}>Haitam jebari</span>
           </div>
      </header>
      <div className={styles.content}>
           <div className={styles.gallery}>
               {data.images.map(img=>(
                    <Image
                     key={data.id}
                     src={img}
                     alt={data.title}
                     width={100}
                     height={100}
                    />
               )   
               )}
           </div>
      </div>
    </div>
  )
}
