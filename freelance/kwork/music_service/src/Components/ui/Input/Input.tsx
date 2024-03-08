import { AiOutlineSearch } from 'react-icons/ai'
import { Search, SearchBar } from './Input.styled'
import {memo, FC, ChangeEvent} from 'react'

interface InputProps {
    handleInput: (e: ChangeEvent<any>) => void;
    value: string;
    placeholder: string;
}

const Input: FC<InputProps> = ({handleInput, value, placeholder} ) => {
    return (
        <Search>
            <AiOutlineSearch style={{  position: "absolute", top: 2 }} color="#623CEA" size="1.5em" />
            <SearchBar
                onChange={handleInput}
                value={value}
                placeholder={placeholder}
                >               
            </SearchBar>
        </Search>
    )
}

export default memo(Input)