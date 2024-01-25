import styled from 'styled-components';

export const FiltersWrapper = styled.div`
   display: flex;
    justify-content: center;
    gap: 18px;
    margin-bottom: 50px;
    align-items: flex-end;
    flex-wrap: wrap;
    `
export const Label = styled.label`
    color: #8A8A89;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;`

export const SelectStyles = {
            control: (base, state) => ({
                ...base,
                width: '224px',
                height: '48px',
                border: 'none',
                borderRadius: '14px',
                fontSize: '18px',
                fontFamily: 'Manrope',
                backgroundColor: '#F7F7FB',
            }),
            menu: base => ({
                ...base,
                width: '224px',
                backgroundColor: '#FFF',
                padding: '14px 8px 14px 18px',
                borderRadius: '14px',
            }),
            option: (base, { isFocused }) => {
            return {
                ...base,
                color: isFocused ? '#121417' : 'rgba(18, 20, 23, 0.20)',
                fontFamily: 'Manrope',
                fontSize: '16px',
                boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
                backgroundColor: '#FFF',
              };
            },

            placeholder: base => ({
              ...base,
                color: '#121417',
                padding: '14px'
            }),
          }


export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  height: 48px;`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const InputLeft = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.20);
  background-color: #F7F7FB;
  border-radius: 14px 0 0 14px;
  padding-left: 0;
  text-indent: 70px;
  font-family: 'Manrope';
  color: #121417;
  font-size: 18px;

  &:focus {
    outline-color: #3470FF;
  }
`;

export const InputRight = styled.input`
  display: block;
  width: 160px;
  height: 48px;
  border: none;
  background-color: #F7F7FB;
  border-radius: 0 14px 14px 0;
  padding-left: 0;
  text-indent: 50px;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 18px;
  margin-right: 18px;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SpanLeft = styled.span`
    position: absolute;
    display: block;
    left: 24px;
    top: 15px;
    color: ${({ theme }) => theme.colors.dark};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
`;

export const SpanRight = styled.span`
    position: absolute;
    display: block;
    left: 184px;
    top: 15px;
    color: ${({ theme }) => theme.colors.dark};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
`;

