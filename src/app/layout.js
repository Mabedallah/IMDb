import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'IMDB Clone APP',  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            {/*Header*/}
        <Header/>   
        {/*NavBar*/}   
        {/*SearchBox*/}
        {children}
        </Providers>
      </body>
    </html>
  )
}
