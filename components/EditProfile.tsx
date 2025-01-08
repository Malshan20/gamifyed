export default function EditProfile() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Edit Profile</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-blue-600 mb-2">Username</label>
          <input type="text" id="username" name="username" className="w-full px-3 py-2 border border-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-blue-600 mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-blue-600 mb-2">Bio</label>
          <textarea id="bio" name="bio" rows={3} className="w-full px-3 py-2 border border-blue-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-300">
          Save Changes
        </button>
      </form>
    </div>
  )
}

