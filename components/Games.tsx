import Image from 'next/image'

const games = [
  { title: 'Math Quest', image: '/kid-sitting-under-the-apple-tree.svg?height=200&width=200' },
  { title: 'Spelling Bee', image: '/spellcheck.svg?height=200&width=200' },
  { title: 'Science Explorer', image: '/children-are-doing-chemical-experiments.svg?height=200&width=200' },
]

export default function Games() {
  return (
    <section className="container mx-auto mt-12 p-8 bg-blue-500 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-yellow-300 mb-8 text-center">Educational Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {games.map((game) => (
          <div key={game.title} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={game.image}
              alt={game.title}
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-xl"
            />
            <h3 className="text-2xl font-bold text-blue-600 text-center">{game.title}</h3>
            <button className="mt-4 w-full bg-yellow-400 text-blue-800 text-lg font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition-colors duration-300">
              Play Now!
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

