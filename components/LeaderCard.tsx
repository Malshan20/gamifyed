import Image from 'next/image'

interface Player {
  rank: number
  avatar: string
  username: string
  points: number
  badges: string[]
}

export default function LeaderCard({ player, isTop3 }: { player: Player; isTop3: boolean }) {
  return (
    <div className={`grid grid-cols-12 gap-4 p-4 items-center ${
      isTop3 ? 'bg-yellow-100' : 'bg-white'
    } border-b border-gray-200 hover:bg-blue-50 transition-colors duration-300`}>
      <div className="col-span-1 text-2xl font-bold text-blue-600">
        {isTop3 && (
          <span className="mr-2">
            {player.rank === 1 ? '👑' : player.rank === 2 ? '🥈' : '🥉'}
          </span>
        )}
        {player.rank}
      </div>
      <div className="col-span-7 flex items-center space-x-4">
        <div className={`relative ${isTop3 ? 'glow-animation' : ''}`}>
          <Image
            src={player.avatar}
            alt={player.username}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <span className="text-lg font-semibold text-blue-600">{player.username}</span>
      </div>
      <div className="col-span-2 text-lg font-bold text-green-600">{player.points}</div>
      <div className="col-span-2 flex space-x-1">
        {player.badges.map((badge, index) => (
          <span key={index} className="text-2xl" title={`Badge ${index + 1}`}>
            {badge}
          </span>
        ))}
      </div>
    </div>
  )
}

