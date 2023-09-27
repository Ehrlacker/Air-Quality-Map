import { useState } from 'react'
import HamburgerAndFormContainer from '../HamburgerAndFormContainer/HamburgerAndFormContainer'
import { Cities } from '../../../types/types'
import './MainSectionContainer.css'


const MainSectionContainer = () => {
    const [searchInput, setSearchInput] = useState("")
    const [cityInput, setCityInput] = useState("")
    const [returnedCities, setReturnedcities] = useState<Cities>();

    console.log("RENDEREDDDD")

    const getStates = async () => {
        if (!searchInput || !cityInput) return;
        const url = `http://api.airvisual.com/v2/city?city=${cityInput}&state=${searchInput}&country=USA&key=${import.meta.env.VITE_REACT_App_airQualityApiKey}`
        const response = await fetch(url)
        const resJSON = await response.json()
        setReturnedcities(resJSON)
        console.log(returnedCities)
    }


    const HandleStateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setSearchInput(newValue)
        console.log(newValue)
    }

    const HandleCityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setCityInput(newValue)
        console.log(newValue)
    }

    const HandleClcick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        getStates()
    }


    return (
        <section className="MainSectionContainer">
            <HamburgerAndFormContainer
                changeCity={HandleCityInputChange}
                onChange={HandleStateInputChange}
                onClick={HandleClcick}
                value={searchInput}
                cityValue={cityInput}
                Cities={returnedCities}
            />
        </section>
    )
}

export default MainSectionContainer