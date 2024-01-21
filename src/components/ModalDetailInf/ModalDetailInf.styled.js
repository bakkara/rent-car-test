import styled from 'styled-components';

export const customStyles = {
        overlay: {
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(18, 20, 23, 0.50)',
                zIndex: '1200', 
                paddingTop: '20px',
                paddingBottom: '20px',
        },
        content: {
                padding: '0', 
                paddingBottom: '40px',
                border: 'none', 
                width: '540px',
                height: 'auto',
                overflow: 'hidden auto',
                scrollBehavior: 'smooth',
                margin: '0 auto',
                scrollbarWidth: 'thin',
        },
};

export const ModalContainer = styled.div`
    padding: ${({ theme }) => theme.spacing(10)};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.spacing(6)};
    color: ${({ theme }) => theme.colors.black};
    position: relative;
    width: 100%;
    height: 100%;
    
    padding-bottom: 40px;
    `

export const ExitButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    padding: ${({ theme }) => theme.spacing(2.5)};
    transition: transform ${({ theme }) => theme.animation.cubicBezier};

    &:hover,
    &:focus {
        transform: scale(1.05);
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 268px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.spacing(6)};
    margin-bottom: ${({ theme }) => theme.spacing(3,5)};
`
export const TextCarWrapperModal = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 14px;
    `

export const ModalTitleTextCar = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin: 0;
    margin-bottom: 8px;`
    
export const ModalTextCarSpan = styled.span`
    color: ${({ theme }) => theme.colors.primary};`

export const ModalTextCarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 14px;
    `   
export const ModalText = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.43;
    margin-bottom: 24px;
`

export const ModalTitleText = styled.p`
    color: ${({ theme }) => theme.colors.dark};
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    margin-bottom: 8px;
`

export const WrapperConditions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
`
export const ConditionsContainer = styled.div`
    display: flex;
    padding: 7px 14px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 35px;
    background: #F9F9F9;
    color: #363535;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.24px;
`

export const ConditionsSpan = styled.span`
    color: #3470FF;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.24px;
`