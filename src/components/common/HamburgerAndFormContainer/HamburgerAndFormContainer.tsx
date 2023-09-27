import { ChangeEventHandler } from "react"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import SearchBar from "../SearchBar/SearchBar"
import {Cities} from '../../../types/types'
import './HamburgerAndFormContainer.css'

type HamburgerAndFormContainerProps = {
    value: string;
    cityValue: string;
    Cities?: Cities
    onChange: ChangeEventHandler;
    changeCity: ChangeEventHandler
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const HamburgerAndFormContainer = ({ onChange, changeCity, onClick, value, cityValue, Cities }: HamburgerAndFormContainerProps) => {
    return (
        <div className="HamburgerAndFormContainer">
            <HamburgerMenu />
            <SearchBar
                changeCity={changeCity}
                onChange={onChange}
                onClick={onClick}
                value={value}
                cityValue={cityValue}
                Cities={Cities}
            />
        </div>
    )
}

export default HamburgerAndFormContainer