import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: ${({ $width }) => `${$width}px`};
  border-radius: 12px;
    background: #3470FF;    

   &:hover {
    backgroundColor: '#0B44CD',
  }
  `;


export const TextButton = styled.p`
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.43;
`;