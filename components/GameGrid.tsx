import GameCard from './GameCard'

const games = {
  top: [
    { id: 1, title: 'Math Quest', icon: '/kid-sitting-under-the-apple-tree.svg?height=100&width=100', badge: 'Popular' },
    { id: 2, title: 'Science Explorer', icon: '/children-are-doing-chemical-experiments.svg?height=100&width=100', badge: 'Top Rated' },
    { id: 3, title: 'Reading Adventure', icon: '/thumb-1920-1384524.png?height=100&width=100', badge: 'Editor\'s Choice' },
  ],
  new: [
    { id: 4, title: 'History Time Machine', icon: '/rb_2151045050.png?height=100&width=100', badge: 'New' },
    { id: 5, title: 'Coding for Kids', icon: '/developer-team.svg?height=100&width=100', badge: 'New' },
    { id: 6, title: 'Art Studio', icon: '/website-designing.svg?height=100&width=100', badge: 'New' },
  ],
  favorites: [
    { id: 7, title: 'Spelling Bee', icon: '/spellcheck.svg?height=100&width=100', badge: 'Your Favorite' },
    { id: 8, title: 'Geography Explorer', icon: '/geography-teacher-teaching-while-pointing-towards-earth-map.svg?height=100&width=100', badge: 'Your Favorite' },
    { id: 9, title: 'Music Maestro', icon: '/mountaineer-play-guitar-at-campsite.svg?height=100&width=100', badge: 'Your Favorite' },
  ],
}

export default function GameGrid({ category }: { category: 'top' | 'new' | 'favorites' }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {games[category].map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  )
}

