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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
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
        </ul>
      </header>
      <main className={styles.main}>
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
        </div>
        <div className={styles.image}>
          <figure>
            <img src="/fotoweb0.png" />
          </figure>
        </div>
      </main>
    </>
  )
}
