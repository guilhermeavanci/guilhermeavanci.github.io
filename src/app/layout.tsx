import 'globals.css'
import { Inter as _Inter } from 'next/font/google'
import { Providers } from 'providers'
import Screen from 'components/shell/Screen'

const inter = _Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Guilherme Avanci Portfolio',
  description: 'React.js, Redux.js, Typescript, SASS, CSS, HTML, Flutter, and more.'
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <Providers>
          <Screen>{children}</Screen>
        </Providers>
      </body>
    </html>
  )
}
