
import { ChangeEventHandler } from 'react'
import './SearchBarInput.css'

type input={
onChange : ChangeEventHandler
}
const SearchBarInput = ({onChange}:input) => {
  return (
    <input className="SearchBarInput" onChange={onChange}></input>
  )
}

export default SearchBarInput