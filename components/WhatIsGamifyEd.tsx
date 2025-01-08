import { Gamepad2, Brain, Users } from 'lucide-react'

export default function WhatIsGamifyEd() {
  return (
    <section className="bg-white rounded-3xl p-8 shadow-lg mb-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">What is GamifyEd?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Gamepad2 size={48} className="text-green-500" />}
          title="Fun Learning Games"
          description="Engage with exciting educational games that make learning a blast!"
        />
        <FeatureCard
          icon={<Brain size={48} className="text-purple-500" />}
          title="Skill Development"
          description="Improve problem-solving, critical thinking, and creativity through play."
        />
        <FeatureCard
          icon={<Users size={48} className="text-orange-500" />}
          title="Social Interaction"
          description="Connect with friends, compete, and learn together in a safe environment."
        />
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-blue-50 p-6 rounded-2xl text-center hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
      <p className="text-blue-800">{description}</p>
    </div>
  )
}

