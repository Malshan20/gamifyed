import Image from 'next/image'

export default function Mascot() {
  return (
    <div className="bg-yellow-300 rounded-3xl p-6 shadow-lg text-center">
      <div className="relative w-48 h-48 mx-auto mb-4">
        <Image
          src="/rb_30219.png?height=192&width=192"
          alt="GamifyEd Mascot"
          width={192}
          height={192}
          className="rounded-full float-animation"
        />
      </div>
      <h3 className="text-2xl font-bold text-blue-600 mb-2">Great job, champions!</h3>
      <p className="text-blue-800">Keep learning and climbing the leaderboard!</p>
    </div>
  )
}

