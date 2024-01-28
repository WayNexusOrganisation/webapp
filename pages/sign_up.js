// pages/signin.js
import Head from 'next/head';
import styles from '../styles/signup.module.css'; 

export default function SignUp() {
  return (
    <div className={styles.signUpContainer}>
      <Head>
        <title>Sign Up - WayNexus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.signUpForm}>
        <h2>Sign Up</h2>
        <input type="text" placeholder="Your email" />
        <input type="password" placeholder="Your password" />
        
        <p>I agree to the Terms of Service <input type="checkbox" className={styles.checkbox}></input> </p>
        <div class="button-container">
           <button type="submit">Sign Up</button>
            <button type="submit">Login via Twitter</button>
           </div>
           
        
           <p>Do you have an account?<a href="#" className={styles.sign}>Sign In</a></p>
        
      </div>
    </div>
  );
}
