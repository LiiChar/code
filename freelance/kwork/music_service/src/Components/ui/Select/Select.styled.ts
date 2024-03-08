import ReactSelect from "react-select";
import styled from 'styled-components';

const Select = styled(ReactSelect)`
    border: 2px solid ${({theme}) => theme.colors.border};
    padding: 8px;
`

export (props:any) => <Select {...props} />