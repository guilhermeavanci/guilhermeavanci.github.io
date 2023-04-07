import {
  ComponentNameToClassKey,
  ComponentsOverrides,
  ComponentsProps,
  ComponentsPropsList,
  ComponentsVariants,
  Theme
} from '@mui/material'

export type ComponentThemeType<
  Name extends keyof ComponentsPropsList = never,
  // Required only if you're using `styleOverrides` property
  ClassKey extends keyof ComponentNameToClassKey = never
> = {
  defaultProps?: ComponentsProps[Name]
  styleOverrides?: ComponentsOverrides<Theme>[ClassKey]
  variants?: ComponentsVariants[Name]
}
