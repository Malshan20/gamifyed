import Image from 'next/image'

interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah, 10",
    quote: "I love GamifyEd! Math is so much fun now, and I'm the top of my class!",
    image: "/rb_2151869123.png?height=80&width=80"
  },
  {
    name: "Tom's Mom",
    quote: "GamifyEd has been a game-changer for my son. He's excited about learning!",
    image: "/rb_2151106393.png?height=80&width=80"
  },
  {
    name: "Alex, 12",
    quote: "The science games are awesome! I feel like a real scientist when I play.",
    image: "/rb_2150603408.png?height=80&width=80"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-white rounded-3xl p-8 shadow-lg mb-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}

function TestimonialCard({ name, quote, image }: Testimonial) {
  return (
    <div className="bg-blue-100 p-6 rounded-2xl hover:bg-blue-200 transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center mb-4">
        <Image src={image} alt={name} width={80} height={80} className="rounded-full mr-4" />
        <h3 className="text-xl font-bold text-blue-600">{name}</h3>
      </div>
      <p className="text-blue-800 italic">"{quote}"</p>
    </div>
  )
}

