import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '#FFFFFF', // background
          100: '#36394A', // color
          150: '#FFF6E6', // theme color
          200: '#6938DA', // primary color
          250: '#FFDD9E', // active theme color
          300: '#F3EEFF', // active primary color
          350: '#FFFFFF',
          400: '#6F6F6F', // normal text
          450: '#000000',
          500: '#6938DA', // white / black
          550: '#FFB9BF', // border notification
          600: '#FF515F',
          700: '#BEA2FF', // border menu
          800: '#6938DA',
          900: '#6938DA',
          950: '#6938DA'
        },
        highlight: {
          background: '{purple.700}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        },
        custom: {
          cardcolor: '{blue.500}'
        }
      },
      dark: {
        primary: {
          50: '#0D0D12', // background
          100: '#DFE1E7', // color
          150: '#674300', // theme color
          200: '#6938DA', // primary color
          250: '#AB7000', // active theme color
          300: '#6938DA', // active primary color
          350: '#0D0D12',
          400: '#979797', // normal text
          450: '#FFFFFF',
          500: '#6938DA', // white / black
          550: '#CC2936', // border notification
          600: '#FF515F',
          700: '#471EA7', // border menu
          800: '#6938DA',
          900: '#6938DA',
          950: '#6938DA'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        },
        custom: {
          cardcolor: '{green.500}'
        }
      }
    }
  },
  components: {
    card: {
      colorScheme: {
        light: {
          root: {
            background: '{indigo.400}',
            borderRadius: '4px'
          }
        },
        dark: {
          root: {
            background: '{custom.cardcolor}',
            borderRadius: '4px'
          }
        }
      }
    },
    button: {
      colorScheme: {
        light: {
          root: {
            background: '#FF515F',
            borderRadius: '20px',
            color: '#ffffff',
            hover: {
              background: '#FF515F'
            },
            focus: {
              background: '#FF515F'
            }
          }
        },
        dark: {
          root: {
            background: '#FF515F',
            borderRadius: '20px',
            color: '#ffffff',
            hover: {
              background: '#FF515F'
            },
            focus: {
              background: '#FF515F'
            }
          }
        }
      }
    }
  }
});
