import Badges from "@/components/Badges";
import Games from "@/components/Games";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Leaderboard from "@/components/Leaderboard";


export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 bg-opacity-50 bg-[url('/stars-and-controllers.png')] bg-repeat">
      <Header />
      <main>
        <Hero />
        <Games />
        <Leaderboard />
        <Badges />
      </main>
    </div>
  )
}

