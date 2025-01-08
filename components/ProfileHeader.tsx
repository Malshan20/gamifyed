import Image from 'next/image'

export default function ProfileHeader() {
  return (
    <div className="bg-yellow-300 rounded-3xl p-6 shadow-lg text-center">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src="/rb_2150603408.png?height=128&width=128"
          alt="User Avatar"
          width={128}
          height={128}
          className="rounded-full border-4 border-blue-500"
        />
        <button className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>
      <h1 className="text-3xl font-bold text-blue-600 mb-2">CoolKid123</h1>
      <p className="text-xl text-blue-800">Level 15 Explorer</p>
      <p className="text-lg text-blue-700 mt-2">Rank: #42 on the Leaderboard</p>
      <p className="text-md text-blue-600 mt-2 italic">"Learning is an adventure!"</p>
    </div>
  )
}

