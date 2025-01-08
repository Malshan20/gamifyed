import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

const quickLinks = [
  { name: 'Games', path: '/games' },
  { name: 'Leaderboard', path: '/leaderboard' },
  { name: 'Profile', path: '/profile' },
  { name: 'Learn More', path: '/learn-more' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
]

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-8 px-4 rounded-t-3xl relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-6xl">🎮</span>
        </div>
        <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <span className="text-6xl">⭐</span>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-300">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path} className="hover:text-yellow-300 transition-colors duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-300">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-300 text-blue-500 p-2 rounded-full hover:bg-yellow-400 transition-colors duration-300"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-300">Get in Touch</h3>
          <Link
            href="/contact"
            className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-300"
          >
            <Mail className="mr-2" size={20} />
            Contact Us
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center relative z-10">
        <p className="text-sm">© 2025 Malshan. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
