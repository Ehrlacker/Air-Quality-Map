import { ChangeEventHandler } from "react"
import SearchBarButton from "../SearchBarButton/SearchBarButton"
import SearchBarInput from "../SearchStateInput/SearchStateInput"
import SearchCity from "../SearchCity/SearchCity"
import {Cities} from '../../../types/types'
import './SearchBar.css'

type SearchBarProps = {
    value?: string;
    cityValue: string;
    Cities?: Cities
    onChange: ChangeEventHandler;
    changeCity: ChangeEventHandler;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

}

const SearchBar = ({ onChange, changeCity, onClick,  value, cityValue}: SearchBarProps) => {
    return (
        <form className="SearchBar">
            <SearchBarInput
                onChange={onChange}
                value={value}
            />
            <SearchCity
                changeCity={changeCity}
                cityValue={cityValue}
            />

            <SearchBarButton
                onClick={onClick}
            />
        </form>
    )
}

export default SearchBar