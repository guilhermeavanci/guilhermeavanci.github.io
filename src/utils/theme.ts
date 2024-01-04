export const isDarkMode = (theme: Theme) => theme === 'forest'

type ThemeType = 'light' | 'dark'

export const getThemeFromType = (type: ThemeType): Theme => {
  switch (type) {
    case 'light':
      return 'emerald'
    case 'dark':
      return 'forest'
  }
}

export const getTypeFromTheme = (type: Theme): ThemeType => {
  switch (type) {
    case 'emerald':
      return 'light'
    case 'forest':
      return 'dark'
  }
}
