import { ChangeEventHandler } from 'react'
import './SearchCity.css'


type SearchCityProps = {
  changeCity: ChangeEventHandler;
  cityValue: string;
}

const SearchCity = ({ changeCity, cityValue, }: SearchCityProps) => {
  return (
    <input className="SearchCity" onChange={changeCity} value={cityValue} placeholder="Nearest city" />
  )
}

export default SearchCity