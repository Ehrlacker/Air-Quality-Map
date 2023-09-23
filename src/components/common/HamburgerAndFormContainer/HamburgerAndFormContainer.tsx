import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import SearchBar from "../SearchBar/SearchBar"
import './HamburgerAndFormContainer.css'


const HamburgerAndFormContainer = () => {
  return (
    <div className="HamburgerAndFormContainer">
        <HamburgerMenu />
        <SearchBar />
    </div>
  )
}

export default HamburgerAndFormContainer