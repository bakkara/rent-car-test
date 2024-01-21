import styled from 'styled-components';

export const CarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;`
  
  
export const TitleCarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;`

export const TitleTextCar = styled.p`
    color: #121417;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;`
    
export const TextCarSpan = styled.span`
    color: #3470FF;`

export const TextCarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 28px;
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    `

export const TextCar = styled.p`
    color: rgba(18, 20, 23, 0.50);
    font-family: Manrope;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    &::after {
        content: '';
        width: 0px;
        height: 16px;
        border-left: 1px solid rgba(18, 20, 23, 0.10);
        margin-left: 6px;
        margin-right: 6px;
    }

    &:last-child::after {
        content: none;
    }
`;


export const ImgWrap = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const Img = styled.img`
    width: 100%;
    height: 268px;
    object-fit: cover;
    border-radius: 14px;
`