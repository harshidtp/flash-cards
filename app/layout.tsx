import './globals.css'
import Navbar from '../components/Navbar'
import React from 'react'

export const metadata = {
  title: 'Quizlet Clone',
  description: 'Flashcards study app',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}

