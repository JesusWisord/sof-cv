import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sofía Cortés</title>
        <meta name="description" content="Sofia Cortes Garcia portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/iconoweb.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <header className={styles.header}>
        <figure>
          <img src="/iconoweb.png" />
        </figure>
        <ul>
          <li>
            <a href="https://google.com">
              <img src="icons/behance.png"/>
            </a>
          </li>
          <li>
            <a href="https://google.com">
              <img src="icons/linkedin.png"/>
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1Dd_dq7g7a2s8uEpnhibuBY27P8wNgxXc/view">
              RESUME
            </a>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <p className={styles.name}>Sofía Cortés</p>
        <div className={styles.description}>
          <p>
            Hello, I’m Sofía — an independent designer and art director based in Mexico city.
          </p>
          <p>
            Focused on creating meaningful experiences through visual communication and bringing
            new concepts to life.
          </p>
          <p>
            With the aim of helping, through strategy and creative intuition,
            I conceptualize adistinctive and impactful visual language.
          </p>
          <p>
            Interested in working together? 
          </p>
          <p>
            Get in touch. → <a href='mailto:sofia.corts@gmail.com' className={styles.email}>sofia.corts@gmail.com</a>
          </p>
          <figure className={styles.sof_logo}>
            <img src="/sofialogoprov.png" />
          </figure>
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
