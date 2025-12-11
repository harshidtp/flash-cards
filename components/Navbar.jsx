import Link from 'next/link'


export default function Navbar() {
return (
<nav className="w-full bg-white shadow p-4 flex justify-between items-center">
<Link href="/" className="font-bold text-xl">Quizlet Clone</Link>
<div className="flex gap-4">
<Link href="/sets/create">Create Set</Link>
<Link href="/auth/login">Login</Link>
</div>
</nav>
)
}