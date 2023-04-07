'use client'
import { ButtonProps, Button as MButton } from '@mui/material'
import { ComponentThemeType } from 'muiComponents/ComponentThemeType'

export default function Button<C extends React.ElementType>(props: ButtonProps<C, { component?: C }>): JSX.Element {
  return <MButton {...props} />
}

export const MuiButton: ComponentThemeType<'MuiButton'> = {
  defaultProps: {
    variant: 'contained'
  }
}
