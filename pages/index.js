import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("particles.js").then(({ particlesJS }) => {
        particlesJS.load('particles-js', '/particles.json', function() {
          console.log('callback - particles.js config loaded');
        });
      }).catch((error) => console.log("particles.js load error:", error));
    }
  }, []);

  return (
    <div className={styles.container}>
    {/* Particles.js Container */}
    <div id="particles-js" className={styles.particlesContainer}></div>

      <Head>
        <title>WayNexus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <Image src="/images/Group 283.png" alt="WayNexus Logo" width={240} height={40} />
        <div className={styles.navLinks}>
          <a href="#solutions">Solutions</a>
          <a href="#about">About Us</a>
          
          
        
        </div>
      </nav>
      
      <nav className={styles.topbar}>
        <div className={styles.button_7}>
        <a href="/signin"> <button className={styles.button}>Sign In</button></a>

        </div>

      </nav>

      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Get insights from every step using AI
          <div className={styles.button_7}>
          <a href="/book-an-appointment"> <button className={styles.button}>Book an appointment</button></a>
          
          </div>
          

        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="#terms">Terms & policies</a>
        <a href="#privacy">Privacy policy</a>
        <a href="#brand">Brand guidelines</a>
        <div className={styles.socialMediaIcons}>
          {/* Add social media icons here */}
        </div>
      </footer>
    </div>
  )
}
