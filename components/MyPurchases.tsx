import Image from 'next/image'

const purchases = [
  { id: 1, name: 'Math Adventure', date: '2023-05-15', icon: '/kid-sitting-under-the-apple-tree.svg?height=50&width=50' },
  { id: 2, name: 'Science Quest', date: '2023-06-02', icon: '/children-are-doing-chemical-experiments.svg?height=50&width=50' },
  { id: 3, name: 'Language Explorer', date: '2023-06-20', icon: '/spellcheck.svg?height=50&width=50' },
]

export default function MyPurchases() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">My Purchases</h2>
      <ul>
        {purchases.map((purchase) => (
          <li key={purchase.id} className="flex items-center mb-4 bg-blue-50 p-3 rounded-2xl hover:bg-blue-100 transition-colors duration-300">
            <Image src={purchase.icon} alt={purchase.name} width={50} height={50} className="rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-blue-700">{purchase.name}</h3>
              <p className="text-sm text-blue-600">Purchased on: {purchase.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

