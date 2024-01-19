import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: ${({ $width }) => `${$width}px`};
  border-radius: 12px;
    background: ${({ theme }) => theme.colors.primary};    

   &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
  `;


export const TextButton = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
`;