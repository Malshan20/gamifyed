import Image from 'next/image'

interface Game {
  id: number
  title: string
  icon: string
  badge: string
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <Image
          src={game.icon}
          alt={game.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-yellow-400 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">
          {game.badge}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-600 mb-2">{game.title}</h3>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
          Play Now!
        </button>
      </div>
    </div>
  )
}

