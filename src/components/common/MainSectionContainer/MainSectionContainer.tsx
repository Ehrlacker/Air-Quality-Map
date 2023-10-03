import { useState } from 'react'
import { AirApiReturnData } from '../../../types/types'
import './MainSectionContainer.css'
import AirQualityInfoContainer from '../AirQualityInfoContainer/AirQualityInfoContainer'
import SearchBar from '../SearchBar/SearchBar'


const MainSectionContainer = () => {
    const [searchInput, setSearchInput] = useState("")
    const [cityInput, setCityInput] = useState("")
    const [airQuality, setAirQuality] = useState<AirApiReturnData>();
    const [errorMessage, setErrorMessage] = useState("")

    const getCityAirQuality = async () => {
        console.log("fetched")
        try {
            const cacheKey = `airQuality_${cityInput}_${searchInput}`;
            const cachedData = localStorage.getItem(cacheKey);

            if (cachedData) {
                try {
                    const parsedData = JSON.parse(cachedData);
                    setAirQuality(parsedData);
                    return;
                } catch (error) {
                }
            }

            const url = `http://api.airvisual.com/v2/city?city=${cityInput}&state=${searchInput}&country=USA&key=${import.meta.env.VITE_REACT_App_airQualityApiKey}`;
            const response = await fetch(url);

            if (!response.ok) {
                setErrorMessage("Please type in a correct US city");
                return;
            }

            const resJSON = await response.json();
            setAirQuality(resJSON);


            localStorage.setItem(cacheKey, JSON.stringify(resJSON));

        } catch (error) {
            console.log(error);
        }
    };

    const HandleStateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setSearchInput(newValue)
    }

    const HandleCityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorMessage !== "") {
            setErrorMessage("");
        }
        const newValue = e.target.value
        setCityInput(newValue)
    }

    const HandleClcick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (cityInput === "") return;
        else if (searchInput === "") return;
        getCityAirQuality()
    }


    return (
        <section className="MainSectionContainer">
            <SearchBar
                changeCity={HandleCityInputChange}
                onChange={HandleStateInputChange}
                onClick={HandleClcick}
                value={searchInput}
                cityValue={cityInput}
                Cities={airQuality}
                error={errorMessage}
            />
            <AirQualityInfoContainer
                AirQuality={airQuality}
            />
        </section>
    )
}

export default MainSectionContainer