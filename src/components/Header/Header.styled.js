import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;

  text-transform: uppercase;

  transition-property: color, background-color, transform;
  transition-duration: 0.2s;

  transform: scale(0.9);

  &:hover,
  &:focus {
    color:${({ theme }) => theme.colors.primary};
  }

  &.active {
    color:${({ theme }) => theme.colors.primary};
    padding: 6px 12px;
    border-radius: 4px;
    transform: scale(1);
    pointer-events: none;
  }
`;


export const HeaderStyle = styled.header`
  box-shadow: 0px 2px 6px 1px rgb(180 185 191 / 50%);
    background: #F7F7FB;
    height: 60px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
`;