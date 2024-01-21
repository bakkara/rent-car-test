
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeText = styled.p`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 230px;
`;

export const HomeButton = styled(Link)`
    border-radius: 12px;
    width: 130px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 14px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};    

   &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export const HomeImg = styled.img`
    width: 600px;
    margin: 0 auto;
    display: flex;
`