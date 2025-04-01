import { definePreset } from '@primeng/themes'
import Aura from '@primeng/themes/aura'

export const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '#6938DA',
          100: '#6938DA',
          200: '#6938DA',
          300: '#6938DA',
          400: '#6938DA',
          500: '#6938DA',
          600: '#6938DA',
          700: '#6938DA',
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
          50: '#6938DA',
          100: '#6938DA',
          200: '#6938DA',
          300: '#6938DA',
          400: '#6938DA',
          500: '#6938DA',
          600: '#6938DA',
          700: '#6938DA',
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
            background: '{primary.200}',
            borderRadius: '20px',
            color: '#ffffff',
            hover: {
              background: '{primary.200}'
            },
            focus: {
              background: '{primary.200}'
            }
          }
        },
        dark: {
          root: {
            background: '{primary.200}',
            borderRadius: '20px',
            color: '#ffffff',
            hover: {
              background: '{primary.200}'
            },
            focus: {
              background: '{primary.200}'
            }
          }
        }
      }
    }
  }
})
