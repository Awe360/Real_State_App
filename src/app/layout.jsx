import React from 'react'
import "./globals.css" 
import NavBar from '@/components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({children}) {
  return (
 <ClerkProvider>
   <html lang="en">
   <body>
<NavBar/>
    {children}
   </body>
   </html>
   </ClerkProvider>
  )
}
