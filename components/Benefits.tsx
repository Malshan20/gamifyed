import Image from 'next/image'

interface Benefit {
  title: string;
  description: string;
  image: string;
}

const benefits: Benefit[] = [
  {
    title: "Boosts Creativity",
    description: "Our games encourage out-of-the-box thinking and creative problem-solving.",
    image: "/idea.svg?height=100&width=100"
  },
  {
    title: "Enhances Teamwork",
    description: "Multiplayer games teach collaboration and communication skills.",
    image: "/business-team.svg?height=100&width=100"
  },
  {
    title: "Makes Learning Fun",
    description: "Turn boring subjects into exciting adventures that kids love!",
    image: "/man-enjoying-vacation.svg?height=100&width=100"
  },
  {
    title: "Builds Confidence",
    description: "As kids master new skills, they gain confidence in their abilities.",
    image: "/politician-giving-his-speech-to-public.svg?height=100&width=100"
  }
]

export default function Benefits() {
  return (
    <section className="bg-white rounded-3xl p-8 shadow-lg mb-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Benefits of Learning Through Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </section>
  )
}

function BenefitCard({ title, description, image }: Benefit) {
  return (
    <div className="flex items-center bg-yellow-100 p-6 rounded-2xl hover:bg-yellow-200 transition-all duration-300 transform hover:scale-105">
      <Image src={image} alt={title} width={100} height={100} className="rounded-full mr-6" />
      <div>
        <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
        <p className="text-blue-800">{description}</p>
      </div>
    </div>
  )
}

