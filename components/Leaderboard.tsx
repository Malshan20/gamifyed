const leaderboardData = [
  { rank: 1, name: 'Alex', score: 1500 },
  { rank: 2, name: 'Sam', score: 1350 },
  { rank: 3, name: 'Jordan', score: 1200 },
]

export default function Leaderboard() {
  return (
    <section className="container mx-auto mt-12 p-8 bg-red-500 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-yellow-300 mb-8 text-center">Leaderboard</h2>
      <div className="bg-white rounded-2xl p-6 shadow-inner">
        {leaderboardData.map((entry) => (
          <div key={entry.rank} className="flex items-center justify-between py-4 border-b-2 border-red-200 last:border-b-0">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-red-500 mr-4">{entry.rank}</span>
              <span className="text-2xl font-semibold text-blue-600">{entry.name}</span>
            </div>
            <span className="text-2xl font-bold text-yellow-500">{entry.score} pts</span>
          </div>
        ))}
      </div>
    </section>
  )
}

