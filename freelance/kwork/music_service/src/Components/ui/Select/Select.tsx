import {FC, ChangeEvent} from 'react'
import { SingleValue } from 'react-select';
import {Select} from './Select.styled'

interface SelectProps {
    selectedOption: string;
    options: any[];
    changeSelectedOption: (newValue: SingleValue<string>) => void
}

const Select: FC<SelectProps> = ({changeSelectedOption, options, selectedOption}) => {
    return (
        <Select
            defaultInputValue={}
            defaultValue={selectedOption}
            onChange={changeSelectedOption}
            options={options}
        />
    )
}

export default Select