export default function ScheduleSection() {
  return (
    <section className="py-16 px-4" id="schedule">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Event Schedule</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-green-400 rounded-full mx-auto mb-6"></div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-pink-400">
            <div className="bg-pink-100 text-pink-600 font-bold py-2 px-4 rounded-lg min-w-fit">
              10:00 AM
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Opening Ceremony</h3>
              <p className=" scegli text-gray-600">Welcome address and ribbon cutting</p>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-400">
            <div className="bg-yellow-100 text-yellow-600 font-bold py-2 px-4 rounded-lg min-w-fit">
              11:00 AM
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Live Music Begins</h3>
              <p className="text-gray-600">Opening act by college band</p>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-400">
            <div className="bg-green-100 text-green-600 font-bold py-2 px-4 rounded-lg min-w-fit">
              12:00 PM
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Food Festival Opens</h3>
              <p className="text-gray-600">All food vendors and stalls open</p>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-400">
            <div className="bg-blue-100 text-blue-600 font-bold py-2 px-4 rounded-lg min-w-fit">
              2:00 PM
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Cultural Performances</h3>
              <p className="text-gray-600">Traditional and modern dance shows</p>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400">
            <div className="bg-purple-100 text-purple-600 font-bold py-2 px-4 rounded-lg min-w-fit">
              4:00 PM
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Contest Time</h3>
              <p className="text-gray-600">Talent show and competitions</p>
            </div>
          </div>

          <div className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-400">
            <div className="bg-indigo-100 text-indigo-600 font-bold py-2 px-4 rounded-lg min-w-fit">
              7:00 PM
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Grand Finale</h3>
              <p className="text-gray-600">Closing performance and prize distribution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}