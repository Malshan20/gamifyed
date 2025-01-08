import Image from 'next/image'

export default function TopBanner() {
  return (
    <div className="bg-yellow-300 py-6 px-4 rounded-b-3xl shadow-lg mt-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Explore Amazing Games!</h1>
          <p className="text-xl text-blue-800">Learn, play, and earn cool badges!</p>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="relative w-40 h-40 float-animation">
            <Image
              src="/65105154_9488003.png?height=160&width=160"
              alt="GamifyEd Mascot"
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

