import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
title: 'Quizlet Clone',
description: 'Flashcards study app',
}

export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="bg-gray-50 text-gray-900">
<Navbar />
<main className="max-w-4xl mx-auto p-4">{children}</main>
</body>
</html>
)
}
