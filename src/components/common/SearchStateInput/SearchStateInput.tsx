import { ChangeEventHandler } from 'react'
import { State } from '../../../types/types'
import { States } from '../StatesArray/StatesArray'
import { v4 as uuidv4 } from 'uuid';
import './SearchStateInput.css'

type SearchBarInputProps = {
    value?: string;
    States?: State[];
    onChange: ChangeEventHandler
}
const SearchBarInput = ({ onChange, value }: SearchBarInputProps) => {
    return (
        <select className="SearchBarInput" onChange={onChange} value={value}>
            {States.map((state) => {
                return (
                    <option key={uuidv4()}>
                        {state}
                    </option>
                )
            })}
        </select>
    )
}

export default SearchBarInput