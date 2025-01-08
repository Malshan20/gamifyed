import Image from 'next/image'

export default function Hero() {
  return (
    <section className="container mx-auto mt-12 p-8 bg-yellow-300 rounded-3xl shadow-lg flex items-center justify-between">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Learn & Play with GamifyEd!</h1>
        <p className="text-xl text-blue-800 mb-8">Join our exciting world of educational games and become a learning champion!</p>
        <button className="bg-red-500 text-white text-2xl font-bold py-4 px-8 rounded-full shadow-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300">
          Start Learning!
        </button>
      </div>
      <div className="relative w-96 h-96">
        <Image
          src="/blackboard.svg?height=384&width=384"
          alt="GamifyEd Mascot"
          width={384}
          height={384}
          className="rounded-full"
        />
      </div>
    </section>
  )
}

