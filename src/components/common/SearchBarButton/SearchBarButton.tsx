import Search from '../../../assets/icons/icons8-search-50.png'
import './SearchBarButton.css'

type button = {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const SearchBarButton = ({ onClick }: button) => {
    return (
        <button className="SearchBarButton" onClick={onClick}>
            <img
                className="SearchIcon"
                src={Search}
                alt="a logo"
            />
        </button>
    )
}

export default SearchBarButton