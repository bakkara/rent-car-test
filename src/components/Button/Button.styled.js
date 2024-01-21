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

export const LoadMoreButton = styled.div`
  color: #3470FF;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`