import type { Metadata } from 'next'
import './globals.css'

import Navbar from './components/Navbar'

const metadata: Metadata = {
  title: "Kenneth's Blog",
  description: 'Created by Kenneth Onuorah',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={"bg-white dark:bg-gray-800"}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
