import Image from 'next/image'

const badges = [
  { name: 'Math Master', image: '/drawing-tools.png?height=100&width=100' },
  { name: 'Spelling Champ', image: '/abc.png?height=100&width=100' },
  { name: 'Science Whiz', image: '/trophy.png?height=100&width=100' },
]

export default function Badges() {
  return (
    <section className="container mx-auto my-12 p-8 bg-yellow-300 rounded-3xl shadow-lg">
      <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">Earn Cool Badges!</h2>
      <div className="flex justify-center space-x-8">
        {badges.map((badge) => (
          <div key={badge.name} className="text-center">
            <div className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={badge.image}
                alt={badge.name}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <p className="mt-4 text-xl font-semibold text-blue-800">{badge.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

