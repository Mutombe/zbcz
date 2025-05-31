import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const EventsPage = ({ setCurrentPage }) => {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for our upcoming events and be part of our vibrant community. 
              Experience powerful worship, fellowship, and service.
            </p>
          </motion.div>

          {/* Event Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                date: "May 31 - June 1, 2025",
                title: "Inaugural Convention Conference",
                location: "Lookeron High School, Southlea Park, Harare",
                description: "Join us for our historic inaugural convention. Experience powerful worship, fellowship, and witness our compassionate services ministry in action.",
                featured: true
              },
              {
                date: "July 15, 2025",
                title: "Annual Charity Walk",
                location: "Harare Central Park",
                description: "Participate in our annual charity walk to raise funds for our Compassionate Services Ministry. Together we can make a difference!",
                featured: false
              },
              {
                date: "August 20, 2025",
                title: "Youth Empowerment Summit",
                location: "ZBCZ Headquarters, Harare",
                description: "A day of inspiration and empowerment for the youth. Workshops, mentorship sessions, and networking opportunities await!",
                featured: false
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  event.featured ? 'ring-2 ring-blue-500 relative' : ''
                }`}
              >
                {event.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Featured Event
                    </span>
                  </div>
                )}
                <div className="text-blue-600 mb-6 flex justify-center">
                  <Calendar className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {event.title}
                </h3>
                <div className="text-center mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {event.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {event.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 justify-center">
                    <MapPin className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-center">{event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Stay connected with our community events and be part of our mission. 
              Contact us for more information about upcoming events and how to participate.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;