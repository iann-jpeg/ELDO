import React from 'react';
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  BookOpen, 
  Bell, 
  MessageSquare,
  Menu
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8" />
              <div>
                <h1 className="text-xl font-bold">ELDO-JAMII SCHOOL</h1>
                <p className="text-xs text-blue-100">Empowering Minds, Building Futures</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-4">
                <a href="#" className="hover:text-blue-200">Home</a>
                <a href="#" className="hover:text-blue-200">About</a>
                <a href="#" className="hover:text-blue-200">Academics</a>
                <a href="#" className="hover:text-blue-200">Admissions</a>
                <a href="#" className="hover:text-blue-200">Contact</a>
              </nav>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50">
                Portal Login
              </button>
            </div>
            
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80"
          alt="Eldo Jamii School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Eldo Jamii School
              </h2>
              <p className="text-xl mb-8">
                A center of academic excellence, cultural diversity, and holistic development. Join us in shaping the leaders of tomorrow through quality education and strong values.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
                  Enroll Now
                </button>
                <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
                  Explore Campus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-8 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">E-Learning Portal</h3>
                  <p className="text-gray-600">Access digital learning resources</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Parent Dashboard</h3>
                  <p className="text-gray-600">Monitor your child's journey</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">School Events</h3>
                  <p className="text-gray-600">Stay updated with activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements & News */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Bell className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold">School Updates</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Term Opening Dates</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        The new academic term begins on January 15th. See the complete calendar for important dates.
                      </p>
                    </div>
                    <span className="text-sm text-blue-600">New</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Sports Day 2024</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Annual sports day scheduled for February. Parents are welcome to attend and support.
                      </p>
                    </div>
                    <span className="text-sm text-blue-600">1 day ago</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Academic Excellence Awards</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Congratulations to our top performers in the national examinations!
                      </p>
                    </div>
                    <span className="text-sm text-blue-600">3 days ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-6">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Latest Achievements</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=500"
                    alt="Science Fair"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold">Regional Science Fair Champions</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Our students showcased exceptional projects at the Regional Science Fair...
                  </p>
                  <button className="text-blue-600 text-sm mt-2 hover:text-blue-700">
                    Read More →
                  </button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=500"
                    alt="Cultural Day"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold">Cultural Day Celebrations</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Celebrating our diversity through music, dance, and traditional performances...
                  </p>
                  <button className="text-blue-600 text-sm mt-2 hover:text-blue-700">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="font-bold text-white">ELDO-JAMII SCHOOL</span>
              </div>
              <p className="text-sm">
                Nurturing talents, building character, and fostering academic excellence since 2010.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Admissions</a></li>
                <li><a href="#" className="hover:text-white">Academic Programs</a></li>
                <li><a href="#" className="hover:text-white">Student Life</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li>Eldoret, Kenya</li>
                <li>P.O. Box 3900-30100</li>
                <li>Phone: +254 722 000 000</li>
                <li>Email: info@eldojamii.ac.ke</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Stay Connected</h3>
              <p className="text-sm mb-4">
                Join our community and stay updated with school events and news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg w-full text-gray-900"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>© 2024 Eldo-Jamii School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;