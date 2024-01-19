export const theme = Object.freeze({
  colors: {
    white: '#fff',
    dark: '#121417',
    primary: '#3470FF',
    hover: '#0B44CD',
    grey: '#8A8A89',    
  },
  fontSizes: {
    small: '12px',
    medium: '14px',
    large: '16px',
    xl: '18px',
  },
  spacing: value => `${4 * value}px`,
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
