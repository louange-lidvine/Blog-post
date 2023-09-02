import './globals.css'
import type { Metadata } from 'next'

import Navbar from './componemts/navbar'
import MyProfilePic from './componemts/myProfilePic';


export const metadata: Metadata = {
  title: "lidvine's  blog",
  description: 'crated by Lidvine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic/>
        {children}
      </body>
    </html>
  )
}
