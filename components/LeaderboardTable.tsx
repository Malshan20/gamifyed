import LeaderCard from './LeaderCard'

interface Player {
  rank: number
  avatar: string
  username: string
  points: number
  badges: string[]
}

const weeklyLeaders: Player[] = [
  { rank: 1, avatar: '/rb_2149436192.png?height=50&width=50', username: 'MathWhiz123', points: 1500, badges: ['🥇', '🧮', '🚀'] },
  { rank: 2, avatar: '/rb_2149436192.png?height=50&width=50', username: 'ScienceNinja', points: 1350, badges: ['🥈', '🔬', '🧪'] },
  { rank: 3, avatar: '/rb_2149436185.png?height=50&width=50', username: 'LiteratureLion', points: 1200, badges: ['🥉', '📚', '✍️'] },
  { rank: 4, avatar: '/rb_2149436192.png?height=50&width=50', username: 'HistoryHero', points: 1100, badges: ['🏛️', '⏳'] },
  { rank: 5, avatar: '/rb_2149436185.png?height=50&width=50', username: 'ArtisticAce', points: 1000, badges: ['🎨', '🖌️'] },
]

const allTimeLeaders: Player[] = [
  { rank: 1, avatar: '/rb_2149436192.png?height=50&width=50', username: 'BrainiacSupreme', points: 10000, badges: ['👑', '🏆', '💯'] },
  { rank: 2, avatar: '/rb_2149436192.png?height=50&width=50', username: 'QuizMaster2000', points: 9500, badges: ['🥇', '🧠', '⚡'] },
  { rank: 3, avatar: '/rb_2149436192.png?height=50&width=50', username: 'EduExplorer', points: 9000, badges: ['🥈', '🌟', '🔍'] },
  { rank: 4, avatar: '/rb_2149436192.png?height=50&width=50', username: 'CuriousScholar', points: 8500, badges: ['🥉', '📚', '🔬'] },
  { rank: 5, avatar: '/rb_2149436192.png?height=50&width=50', username: 'WisdomSeeker', points: 8000, badges: ['🏅', '🦉', '💡'] },
]

export default function LeaderboardTable({ category }: { category: 'weekly' | 'allTime' }) {
  const leaders = category === 'weekly' ? weeklyLeaders : allTimeLeaders

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-12 gap-4 p-4 bg-blue-500 text-white font-bold">
        <div className="col-span-1">Rank</div>
        <div className="col-span-7">Player</div>
        <div className="col-span-2">Points</div>
        <div className="col-span-2">Badges</div>
      </div>
      {leaders.map((player, index) => (
        <LeaderCard key={player.username} player={player} isTop3={index < 3} />
      ))}
    </div>
  )
}

