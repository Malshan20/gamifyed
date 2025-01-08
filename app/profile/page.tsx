import EditProfile from "@/components/EditProfile";
import ProfileHeader from "@/components/ProfileHeader";
import Header from "@/components/Header";
import ProgressTracker from "@/components/ProgressTracker";
import MyPurchases from "@/components/MyPurchases";
import MyAddress from "@/components/MyAddress";
import MyFavorites from "@/components/MyFavorites";
import MyBadges from "@/components/MyBadges";


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-blue-100 bg-opacity-50 bg-[url('/stars-and-controllers.png')] bg-repeat">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProfileHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <EditProfile />
            <MyAddress />
            <MyPurchases />
          </div>
          <div>
            <ProgressTracker />
            <MyBadges />
            <MyFavorites />
          </div>
        </div>
      </main>
    </div>
  )
}

