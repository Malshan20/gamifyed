import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-yellow-300 rounded-3xl p-8 shadow-lg mb-12 flex items-center justify-between">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Welcome to GamifyEd!</h1>
        <p className="text-xl text-blue-800 mb-6">Discover how we make learning fun and exciting for kids of all ages!</p>
        <button className="bg-red-500 text-white text-xl font-bold py-3 px-6 rounded-full hover:bg-red-600 transform hover:scale-105 transition-all duration-300">
          Start Your Learning Adventure!
        </button>
      </div>
      <div className="hidden md:block relative w-64 h-64">
        <Image
          src="/rb_30219.png?height=256&width=256"
          alt="GamifyEd Mascot"
          width={256}
          height={256}
          className="rounded-full float-animation"
        />
      </div>
    </section>
  )
}

