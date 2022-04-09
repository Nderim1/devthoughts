import '../styles/globals.css'
import Image from 'next/image'
import Header from '/components/Header'

function DevThoughts({ Component, pageProps }) {
  return <div className='h-full'>
    <Header />
    <div className='mainContent h-fit'>
      <Component {...pageProps} />
    </div>
    <footer className='footer'>
      <a
        href="https://devthoughts.xyz"
        target="_blank" rel="noreferrer"
      >
        Made with ❤️ by {' '}
        <span className='font-bold italic text-black'>
          dev thoughts
        </span>
      </a>
    </footer>
  </div>
}

export default DevThoughts
