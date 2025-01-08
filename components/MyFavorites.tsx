import Image from 'next/image'

const favorites = [
  { id: 1, name: 'Math Quest', icon: '/kid-sitting-under-the-apple-tree.svg?height=50&width=50' },
  { id: 2, name: 'Science Explorer', icon: '/children-are-doing-chemical-experiments.svg?height=50&width=50' },
  { id: 3, name: 'Reading Adventure', icon: '/spellcheck.svg?height=50&width=50' },
]

export default function MyFavorites() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">My Favorites</h2>
      <ul>
        {favorites.map((game) => (
          <li key={game.id} className="flex items-center mb-4 bg-pink-50 p-3 rounded-2xl hover:bg-pink-100 transition-colors duration-300">
            <Image src={game.icon} alt={game.name} width={50} height={50} className="rounded-full mr-4" />
            <h3 className="text-lg font-semibold text-blue-700">{game.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

