import { Calendar, MapPin, Clock, Ticket, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-blue-200 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent mb-4 animate-pulse">
            Spring Carnival
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
            Presented by Islington College
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl mb-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-pink-500" />
              <span className="font-semibold">March 21, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-green-500" />
              <span className="font-semibold">10:00 AM - 8:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-500" />
              <span className="font-semibold">Islington College</span>
            </div>
          </div>

          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
            <Ticket className="w-6 h-6" />
            Get Tickets Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Join us for a day of spring celebration filled with music, food, games, and unforgettable memories!
        </p>
      </div>
    </section>
  );
}