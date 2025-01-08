'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Games', path: '/games' },
  { name: 'Leaderboard', path: '/leaderboard' },
  { name: 'Profile', path: '/profile' },
  { name: 'Learn More', path: '/learn-more' },
]

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-500 p-4 rounded-b-3xl shadow-lg">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-yellow-300 hover:text-yellow-100 transition-colors duration-300">
            GamifyEd
          </Link>
          <button
            className="lg:hidden text-white hover:text-yellow-300 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`hidden lg:flex space-x-6`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path}
                  className={`nav-link ${
                    pathname === item.path
                      ? 'nav-link-active'
                      : 'nav-link-inactive'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className={`lg:hidden mt-4 space-y-2 ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.path}
                className={`nav-link ${
                  pathname === item.path
                    ? 'nav-link-active'
                    : 'nav-link-inactive'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
