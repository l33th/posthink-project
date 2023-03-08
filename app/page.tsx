import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to&nbsp;
          <code className={styles.code}>POSTHINK</code>.
        </p>
        <div>
          <Link
            href="https://wmouton.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            WMouton
          </Link>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/POSTHINK.svg"
          alt="pt Logo"
          width={880}
          height={80}
          priority
        />
      </div>
      <p className={inter.className}>
            Full-Stack Web Application
          </p>
          <h2 className={inter.className}>
            Coming Soon...
          </h2>

      <div className={styles.grid}>
        <Link
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Create and Delete Posts <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            You will be able to create and delete posts.
          </p>
        </Link>

        <Link
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Comment on Posts <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Comment on other peopl&apos;s posts.</p>
        </Link>

        <Link
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Full Authentication <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Sign up and login with full authentication.
          </p>
        </Link>
      </div>
    </main>
  )
}
