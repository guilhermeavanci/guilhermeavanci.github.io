'use client'
import Box from 'muiComponents/Box'

export default function Page({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'background.default'
      }}>
      {children}
    </Box>
  )
}
