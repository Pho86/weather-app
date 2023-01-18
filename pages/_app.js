import '@/styles/globals.css'
import { Asap  } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const ASAP = Asap({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <main className={ASAP.className}>
    <Component {...pageProps} />
  </main>
}