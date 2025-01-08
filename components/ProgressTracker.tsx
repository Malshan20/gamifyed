export default function ProgressTracker() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">My Progress</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Level 15</h3>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <p className="text-sm text-blue-600 mt-1">750 / 1000 XP to next level</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Achievements</h3>
        <p className="text-blue-600">You've unlocked 15 out of 30 achievements!</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Daily Streak</h3>
        <p className="text-blue-600">You're on a 7-day learning streak! Keep it up!</p>
      </div>
      <div className="mt-6 bg-yellow-100 p-4 rounded-2xl">
        <p className="text-lg font-semibold text-blue-700">Motivational Message:</p>
        <p className="text-blue-600 italic">"Every day is a new opportunity to learn and grow. You're doing great!"</p>
      </div>
    </div>
  )
}

