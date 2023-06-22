import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <section id="hero">
          <h1>Balkarn Gill</h1>
          <p>Web Developer specializing in full stack development.</p>
          {/* Add a profile picture */}
          <Image
            className={styles.profilePicture}
            src="/signature.png"
            alt="Profile Picture"
            width={818}
            height={198}
          />
        </section>

        <section id="about">
          <h2>About</h2>
          <p>
            Brief introduction about yourself...
          </p>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div>
            {/* Add your experiences here */}
          </div>
        </section>
      </main>
    </div>
  );
}
