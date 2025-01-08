import LeaderboardTable from "@/components/LeaderboardTable";
import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import Mascot from "@/components/Mascot";


export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-blue-100 bg-opacity-50 bg-[url('/stars-and-controllers.png')] bg-repeat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">GamifyEd Leaderboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SectionHeader title="Weekly Leaders" icon="🏆" />
            <LeaderboardTable category="weekly" />
          </div>
          <div className="lg:col-span-1">
            <Mascot />
          </div>
        </div>
        <div className="mt-12">
          <SectionHeader title="All-Time Champions" icon="👑" />
          <LeaderboardTable category="allTime" />
        </div>
      </main>
    </div>
  )
}

