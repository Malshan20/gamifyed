import Image from 'next/image'

const badges = [
  { id: 1, name: 'Math Wizard', icon: '🧙‍♂️', description: 'Solved 100 math problems' },
  { id: 2, name: 'Science Explorer', icon: '🔬', description: 'Completed all science quests' },
  { id: 3, name: 'Bookworm', icon: '📚', description: 'Read 20 books' },
  { id: 4, name: 'History Buff', icon: '🏛️', description: 'Aced the history challenge' },
]

export default function MyBadges() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">My Badges</h2>
      <div className="grid grid-cols-2 gap-4">
        {badges.map((badge) => (
          <div key={badge.id} className="bg-yellow-100 p-4 rounded-2xl text-center hover:bg-yellow-200 transition-colors duration-300">
            <span className="text-4xl mb-2">{badge.icon}</span>
            <h3 className="text-lg font-semibold text-blue-700 mb-1">{badge.name}</h3>
            <p className="text-sm text-blue-600">{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

