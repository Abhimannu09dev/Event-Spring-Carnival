import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

export default function VenueSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50" id='venue'>
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

          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2685218313313!2d85.32261807597648!3d27.708994376181657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908434cb3c5%3A0x1fdf1a6d41d2512d!2sIslington%20College!5e0!3m2!1sen!2snp!4v1755595299111!5m2!1sen!2snp"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>

              <div className="text-center mt-4">
                <p className="text-gray-600 font-medium">Islington College, Kamalpokhari, Kathmandu</p>
                <a
                  href="https://maps.app.goo.gl/TxfjVjukG5L8JscGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 mx-auto inline-flex"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}