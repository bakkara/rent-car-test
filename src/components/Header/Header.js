import { HeaderStyle, MenuWrapper, NavLinkStyled } from './Header.styled'

const Header = () => {
  return (
        <HeaderStyle>
          <MenuWrapper>
              <NavLinkStyled to='/'>
                  Home
              </NavLinkStyled>
              <NavLinkStyled to='/catalog'>
                  Catalog
              </NavLinkStyled>
              <NavLinkStyled to='/favorites'>
                  Favorites
              </NavLinkStyled>
          </MenuWrapper>          
      </HeaderStyle>
  )
}

export default Header
