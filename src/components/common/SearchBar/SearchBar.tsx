import SearchBarButton from "../SearchBarButton/SearchBarButton"
import SearchBarInput from "../SearchBarInput/SearchBarInput"
import './SearchBar.css'

const SearchBar = () => {
    return (
        <form className="SearchBar">
            <SearchBarInput
                onChange={() => { console.log("Changed") }}
            />
            <SearchBarButton
                onClick={() => {
                    console.log("Clicked");

                }}
            />
        </form>
    )
}

export default SearchBar