import { Music, Utensils, Gamepad2, Users, Star, Ticket } from 'lucide-react';

export default function HighlightsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-pink-50" id='highlights'>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Event Highlights</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-pink-400">
            <div className="text-pink-500 mb-4">
              <Music className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Live Music</h3>
            <p className="text-gray-600">Enjoy performances from local bands and solo artists across multiple genres throughout the day.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-yellow-400">
            <div className="text-yellow-500 mb-4">
              <Utensils className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Food & Drinks</h3>
            <p className="text-gray-600">Savor delicious treats from food trucks and local vendors, featuring cuisines from around the world.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-400">
            <div className="text-green-500 mb-4">
              <Gamepad2 className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Games & Activities</h3>
            <p className="text-gray-600">Participate in fun games, carnival rides, and interactive activities for all ages.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-400">
            <div className="text-blue-500 mb-4">
              <Users className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Performances</h3>
            <p className="text-gray-600">Watch amazing cultural dance and music performances celebrating our diverse community.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-purple-400">
            <div className="text-purple-500 mb-4">
              <Star className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Contests</h3>
            <p className="text-gray-600">Join exciting competitions including talent shows, dance-offs, and creative contests with amazing prizes.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-indigo-400">
            <div className="text-indigo-500 mb-4">
              <Ticket className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Special Attractions</h3>
            <p className="text-gray-600">Experience unique attractions including art exhibits, photo booths, and surprise entertainment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}