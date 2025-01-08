import { UserPlus, Gamepad, Award } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section className="bg-white rounded-3xl p-8 shadow-lg mb-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        <Step
          icon={<UserPlus size={48} className="text-blue-500" />}
          title="Sign Up"
          description="Create your free account and set up your profile."
          number={1}
        />
        <Step
          icon={<Gamepad size={48} className="text-green-500" />}
          title="Play & Learn"
          description="Choose from a variety of educational games and start playing!"
          number={2}
        />
        <Step
          icon={<Award size={48} className="text-yellow-500" />}
          title="Earn Rewards"
          description="Collect points, badges, and climb the leaderboard as you learn."
          number={3}
        />
      </div>
    </section>
  )
}

function Step({ icon, title, description, number }: { icon: React.ReactNode, title: string, description: string, number: number }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="relative">
        <div className="bg-red-100 rounded-full p-6 mb-4 hover:bg-red-200 transition-colors duration-300">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
      <p className="text-blue-800">{description}</p>
    </div>
  )
}
