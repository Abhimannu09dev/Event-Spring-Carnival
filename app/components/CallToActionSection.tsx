import { Ticket, Users } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500" id='tickets'>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Don't Miss Out!
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join us for the most colorful and exciting spring celebration of the year. Get your tickets now and be part of the magic!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 justify-center">
            <Ticket className="w-6 h-6" />
            Get Tickets
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center">
            <Users className="w-6 h-6" />
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}