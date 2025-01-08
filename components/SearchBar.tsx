import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="my-8 relative">
      <input
        type="text"
        placeholder="Search for games..."
        className="w-full py-3 px-12 text-lg bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
    </div>
  )
}

