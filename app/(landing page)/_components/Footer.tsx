import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-transparent py-4 text-center text-sm text-gray-600 dark:text-white">
      <div className="container mx-auto px-4">
        <p className="mb-2">&copy; {new Date().getFullYear()} arkroy ThinkSpace</p>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">
            Terms and Conditions
          </Link>
          <Link href="/" className="hover:underline">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}

