import styled from 'styled-components';

export const AsideS = styled.aside`
    width: 15%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.side};
`

export const WrapperContentS = styled.div`
    height: 25%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 25px;
`

export const NameS = styled.div`
    margin-bottom: 20px
`

export const NavigationS = styled.nav`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`

export const ItemNavS = styled.div`
    margin-bottom: 20px
`