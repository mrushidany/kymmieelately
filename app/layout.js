import { Teko, Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"

const teko = Teko({
  weight: ['300'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-teko'
})

const poppins = Poppins({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

const playFairDisplay = Playfair_Display({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-play-fair-display'
})

export const metadata = {
  title: 'HOME',
  description: 'Kymmiee Lately',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${teko.variable} ${poppins.variable} ${playFairDisplay.variable}`}>{children}</body>
    </html>
  )
}
