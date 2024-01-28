// pages/signin.js
import Head from 'next/head';
import styles from '../styles/Signin.module.css'; 

export default function SignIn() {
  return (
    <div className={styles.signInContainer}>
      <Head>
        <title>Sign In - WayNexus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.signInForm}>
        <h2>Log In</h2>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
        <button type="submit">Log In</button>
      </div>
    </div>
  );
}
