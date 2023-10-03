import { ChangeEventHandler } from "react"
import SearchBarButton from "../SearchBarButton/SearchBarButton"
import SearchBarInput from "../SearchStateInput/SearchStateInput"
import SearchCity from "../SearchCity/SearchCity"
import { AirApiReturnData } from '../../../types/types'
import './SearchBar.css'

type SearchBarProps = {
    value?: string;
    cityValue: string;
    Cities?: AirApiReturnData
    error: string;
    onChange: ChangeEventHandler;
    changeCity: ChangeEventHandler;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const SearchBar = ({ onChange, changeCity, onClick, value, cityValue, error }: SearchBarProps) => {
    return (
        <div className="SearchBar">
            <form className="SearchBarForm">
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
            <p className="SearchBarError" >
                {error}
            </p>
        </div>
    )
}

export default SearchBar