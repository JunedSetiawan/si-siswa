import './globals.css'
import { Inter } from 'next/font/google'

import { ClerkProvider} from "@clerk/nextjs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" data-theme="dracula">
      <body className={inter.className}>
      <main className="flex min-h-screen flex-col items-center justify-between p-5">
    <Navbar />
    {children}
    <Footer/>
  </main>
        </body>
    </html>
    </ClerkProvider>
  )
}
