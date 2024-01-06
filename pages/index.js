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
        {/* Wrap the Solutions link and the dropdown content in a div with the navItem class */}
        <div className={styles.navItem}>
      <a href="#solutions" className={styles.navLink}>Solutions</a>
      <div className={styles.dropdownContent}>
        <a href="#navigate">Navigate</a>
        <a href="#analyse">Analyse</a>
        <a href="#combine">Combine</a>
        <a href="#optimise">Optimise</a>
      </div>
    </div>
    {/* Wrap the About Us link and the dropdown content in a div with the navItem class */}
    <div className={styles.navItem}>
      <a href="#about" className={styles.navLink}>About Us</a>
      <div className={styles.dropdownContent}>
        <a href="#about">Learn More</a>
        <a href="#team">Join Us</a>
      </div>
    </div>

    <a href="/signin" className={styles.navLink}>Sign In</a>
    <a href="#contact" className={styles.contactUs}>Contact Us</a>
  </div>
</nav>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Get insights from every step using AI
        </h1>

        <div className={styles.ctaButtons}>
          <a href="/sign_up"> <button className={styles.button}>Sign Up</button></a>
        </div>
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
