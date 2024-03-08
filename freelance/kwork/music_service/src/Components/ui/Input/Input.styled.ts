import styled from 'styled-components';

export const Search = styled.div`
  display: flex;
  position: relative;  
  align-items: center;
  width: 100%;
  height: 100%;
`

export const SearchBar = styled.input`
  padding-left: 2.5rem;
  width: 100%;
  height: 100%;
  font-size: 16px;
  border: 0;
  border-bottom: 2px solid rgb(55,54,54);
  color: ${(({theme}) => theme.colors.text)};
  background-color: inherit;

`