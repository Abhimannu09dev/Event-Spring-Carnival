import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About the Carnival</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to Islington College's most anticipated event of the year! The Spring Carnival is a vibrant celebration that brings together our entire community for a day of joy, creativity, and connection.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experience live musical performances from talented local artists, indulge in delicious food from diverse vendors, participate in exciting games and competitions, and witness breathtaking cultural performances that showcase our rich heritage.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-semibold">Live Music</span>
              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">Food Festival</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">Games & Fun</span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Cultural Shows</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 via-yellow-200 to-green-200 rounded-3xl p-8 shadow-xl">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Image
                    src="/event.svg"
                    alt="Spring Carnival Event"
                    width={300}
                    height={150}
                    className="mt-4 rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Join the Fun!</h3>
                <p className="text-gray-700">Be part of our biggest spring celebration yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}