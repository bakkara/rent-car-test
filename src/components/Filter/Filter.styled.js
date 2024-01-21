import styled from 'styled-components';

export const FiltersWrapper = styled.div`
   display: flex;
    justify-content: center;
    gap: 18px;
    margin-bottom: 8px;
    align-items: flex-end;
    `


export const Label = styled.label`
color: #8A8A89;

font-family: Manrope;
font-size: 14px;
font-style: normal;
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




