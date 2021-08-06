import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
        <Head>
          <title>Ninja List | Home</title>
          <meta name="keywords" content="ninjas"></meta>
        </Head>
        <div>
          <h1 className={styles.title}>Homepage</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link href="/ninja">
            <a className={styles.btn}>a list ninja listing</a>
          </Link>
        </div>
    </div>
    
  )
}
