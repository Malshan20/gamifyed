export default function MyAddress() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">My Address</h2>
      <p className="text-blue-800 mb-4">This information is for parents/guardians to fill out:</p>
      <form>
        <div className="mb-4">
          <label htmlFor="address" className="block text-blue-600 mb-2">Street Address</label>
          <input type="text" id="address" name="address" className="w-full px-3 py-2 border border-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-blue-600 mb-2">City</label>
          <input type="text" id="city" name="city" className="w-full px-3 py-2 border border-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="zipcode" className="block text-blue-600 mb-2">Zip Code</label>
          <input type="text" id="zipcode" name="zipcode" className="w-full px-3 py-2 border border-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-300">
          Update Address
        </button>
      </form>
    </div>
  )
}

