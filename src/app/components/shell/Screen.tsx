'use client'
import Box from 'muiComponents/Box'

export default function Screen({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh'
      }}>
      {children}
    </Box>
  )
}
