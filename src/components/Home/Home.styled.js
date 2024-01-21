
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeTextTitle = styled.h1`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    width: 100%;
`;

export const TextTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-bottom: 20px;
`
export const HomeTextUl = styled.ul`
    list-style: disc;
    padding-left: 60px;
`;

export const HomeTextLi = styled.li`
    font-size: 18px;
    font-weight: 400;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-bottom: 20px;
    
`
export const HomeText = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-bottom: 20px;
    padding-left: 40px;
`

export const HomeButton = styled(Link)`
    border-radius: 12px;
    width: 230px;
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