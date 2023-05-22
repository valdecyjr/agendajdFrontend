import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'AgendaJD',
  description: 'Final Project Course JD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
