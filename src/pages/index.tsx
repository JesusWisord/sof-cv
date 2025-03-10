import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e: Event) => {
      // prevent the right-click menu from appearing
      e.preventDefault()
    }

    // attach the event listener to 
    // the document object
    document.addEventListener("contextmenu", handleContextMenu)

    // clean up the event listener when 
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])
  return (
    <>
      <Head>
        <title>Sofía Cortés</title>
        <meta name="description" content="Sofia Cortes Garcia portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.header}>
        <figure>
          <img src="/iconoweb.png" />
        </figure>
        <ul>
          <li>
            <a href="https://www.behance.net/sofiacorts" target="_blank" rel="noreferrer">
              <img src="icons/behance.png"/>
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/sof%C3%ADa-cort%C3%A9s" target="_blank" rel="noreferrer">
              <img src="icons/linkedin.png"/>
            </a>
          </li>
          <li>
            <a href="https://linktr.ee/soficorga" target="_blank" rel="noreferrer">
              <img src="icons/linktree.svg"/>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1ncoAOvoyOxWHiJx7QINaP6hPD_kqsEwj/view" target="_blank" rel="noreferrer">
              RESUME
            </a>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <p className={styles.name}>Sofía Cortés</p>
        <div className={styles.description}>
          <p>
            Hello, I’m Sofía — multidisciplinary graphic designer and creative thinker based in Mexico city.
          </p>
          <p>
          Focused on creating meaningful experiences through visual communication and bringing new concepts to life.
          </p>
          <p>
            Interested in working together? 
          </p>
          <p>
            Get in touch. → <a href='mailto:sofia.corts@gmail.com' className={styles.email}>sofia.corts@gmail.com</a>
          </p>
          <p className={styles.bottom_text}>
            Símple, Intimo, Humano
          </p>
        </div>
        <div className={styles.image}>
          <figure>
            <img src="/fotoweb0.png" />
          </figure>
        </div>
        <span className={styles.dot}></span>
        <span className={styles.page_number}>01</span>
        <a href="mailto:sofia.corts@gmail.com" className={styles.email}>sofia.corts@gmail.com</a>
      </main>
    </>
  )
}
