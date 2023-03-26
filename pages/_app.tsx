import { AppProps } from 'next/app'
import { useState } from 'react'
import Nav from './components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen flex flex-col`} style={{ fontFamily: 'Kanit' }}>
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
