import Image from "next/image";
import { Calendar, MapPin, Music, Utensils, Gamepad2, Users, Clock, Phone, Mail, Instagram, Facebook, Twitter, Star, Ticket, ArrowRight, ExternalLink } from 'lucide-react';



export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-green-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-blue-200 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
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
                <span className="font-semibold">Islington College Campus</span>
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

      {/* About the Event */}
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
                  {/* Get image through public */}
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

      {/* Event Highlights */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-pink-50">
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

      {/* Schedule */}
      <section className="py-16 px-4">
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
                <p className="text-gray-600">Welcome address and ribbon cutting</p>
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

      {/* Venue & Map */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Venue & Location</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-500" />
                  Islington College
                </h3>
                <p className="text-gray-700 mb-4">
                  Kamalpokhari, Kathmandu<br />
                  Nepal
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+977 981234567</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>info@islington.edu.np</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-800 mb-3">Getting There</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Parking available on campus</li>
                  <li>• Public transport accessible</li>
                  <li>• Taxi and ride-sharing services available</li>
                  <li>• Wheelchair accessible venue</li>
                </ul>
              </div>
            </div>
            {/* Map */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2685218313313!2d85.32261807597648!3d27.708994376181657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908434cb3c5%3A0x1fdf1a6d41d2512d!2sIslington%20College!5e0!3m2!1sen!2snp!4v1755595299111!5m2!1sen!2snp"
                width="100%" 
                height="320" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"></iframe>
            
                <div className="text-center mt-4">
                  <p className="text-gray-600 font-medium">Islington College, Kamalpokhari, Kathmandu</p>
                  <a href="https://maps.app.goo.gl/TxfjVjukG5L8JscGA" target="_blank" rel="noopener noreferrer" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 mx-auto inline-flex">
                    <ExternalLink className="w-4 h-4" />
                    View on Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500">
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Spring Carnival 2025</h3>
              <p className="text-gray-300 mb-4">
                Organized by Islington College - Creating memories, celebrating community.
              </p>
              <div className="text-2xl mb-4">#SpringCarnival2025</div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+977 981234567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>events@islington.edu.np</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kamalpokhari, Kathmandu</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Islington College. All rights reserved. | Bringing the community together through celebration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

