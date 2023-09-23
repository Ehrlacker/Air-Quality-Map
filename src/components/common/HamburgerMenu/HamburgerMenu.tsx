import {useState} from 'react'
import Hamburger from "hamburger-react"

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false)
  return (
    <Hamburger color="black" toggled={isOpen} toggle={setOpen} />
  )
}

export default HamburgerMenu