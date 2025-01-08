import GameGrid from "@/components/GameGrid";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SectionHeader from "@/components/SectionHeader";
import TopBanner from "@/components/TopBanner";

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-blue-100 bg-opacity-50 bg-[url('/stars-and-controllers.png')] bg-repeat">
      <Header />
      <TopBanner />
      <main className="container mx-auto px-4 py-8">
        <SearchBar />
        <SectionHeader title="Top Games" icon="🏆"/>
        <GameGrid category="top" />
        <SectionHeader title="New Releases" icon="🆕" />
        <GameGrid category="new" />
        <SectionHeader title="Your Favorites" icon="❤️"/>
        <GameGrid category="favorites" />
      </main>
    </div>
  )
}
