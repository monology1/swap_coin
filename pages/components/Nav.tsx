import { FunctionComponent, useState } from 'react'
import DarkModeToggle from './darkmode/darkmodeSwitch'
import ConnectWallet from './connectWallet'
type Props = {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}
const Nav: FunctionComponent<Props> = ({ darkMode, setDarkMode }) => {


  const handleToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav className="p-6 flex items-center justify-between" style={{ backgroundColor: darkMode ? '#0D1320' : '#fff' }}>
      <a href="#" className="font-bold">
        Swap Coin
      </a>
      <div className="flex items-center">
        <a href="#" className="mr-6">
          Home
        </a>
        <a href="#Login" className="mr-6">
          Login
        </a>
        <a href="#" className="mr-6">
          About
        </a>
        <a href="#" className="mr-6">
          Contact
        </a>
        <div className="ml-6">
          <ConnectWallet/>
        </div>
        <div className="DarkModeToggle ml-6">
          <DarkModeToggle onToggle={handleToggle} />
        </div>
      </div>
    </nav>
  )
}

export default Nav