import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4" id='contact'>
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
              <a href="https://www.instagram.com/islingtoncollege/" className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/IslingtonCollege/" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
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
  );
}