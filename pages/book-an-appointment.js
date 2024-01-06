import Head from 'next/head';
import styles from '../styles/book_an_appointment.module.css';

export default function book_an_appointment() {
  return (
    <div className={styles.book_an_appointment}>
      <Head>
        
        <title>Book an appoinment - WayNexus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.book_an_appointmentForm}>
        <h2>Book an appointment</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Work email" />
        <input type="text" placeholder="Company name" />
        <input type="text" placeholder="Your phone number" />
        <p> By submitting this form, you agree to WayNexus <a href="#" className={styles.privacypolicy}>Privacy Policy</a> </p>
        <a href="#submit"> <button className={styles.button_7}>Submit</button></a>
      </div>
    </div>
  );
}
