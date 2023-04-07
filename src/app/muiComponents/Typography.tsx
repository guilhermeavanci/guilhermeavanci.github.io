'use client'
import { TypographyProps, Typography as MTypography } from '@mui/material'

export default function Typography<C extends React.ElementType>(
  props: TypographyProps<C, { component?: C }>
): JSX.Element {
  return <MTypography {...props} />
}
