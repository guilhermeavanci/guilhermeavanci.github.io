'use client'
import Toolbar from 'muiComponents/Toolbar'
import MuiAppBar from 'muiComponents/AppBar'
import Typography from 'muiComponents/Typography'
import IconButton from 'muiComponents/IconButton'
import Brightness7Icon from 'muiComponents/icons/Brightness7Icon'
import Brightness4Icon from 'muiComponents/icons/Brightness4Icon'
import { useTheme } from '@mui/material/styles'

export default function AppBar(): JSX.Element {
  const theme = useTheme()
  return (
    <MuiAppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          {"Guilherme Avanci's Portfolio"}
        </Typography>
        {/* TODO: add timeline button and section */}
        {/* <Button color='inherit' sx={{ mr: 2 }}>
          Timeline
        </Button> */}
        <IconButton color='inherit' aria-label='dark-and-light-mode'>
          {/* TODO: add dark mode feature */}
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  )
}
