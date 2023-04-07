'use client'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#68da23'
    },
    secondary: {
      main: '#4cc35b'
    },
    background: {
      default: '#050305'
    }
  }
})

export function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
