export default function SectionHeader({ title, icon }: { title: string; icon: string }) {
  return (
    <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
      <span className="bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center mr-4">
        <span className="text-2xl">{icon}</span>
      </span>
      {title}
    </h2>
  )
}

