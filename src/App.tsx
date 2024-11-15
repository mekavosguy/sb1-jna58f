import React from 'react';
import { Calendar, Phone, Clock, MapPin, Shield, Sparkles, Users, Activity } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import DoctorCard from './components/DoctorCard';
import TestimonialCard from './components/TestimonialCard';
import Footer from './components/Footer';

function App() {
  const services = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic procedures"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Preventive Care",
      description: "Regular check-ups and cleanings for optimal oral health"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Emergency Care",
      description: "24/7 emergency dental services when you need them most"
    }
  ];

  const doctors = [
    {
      name: "Dr. Sarah Chen",
      role: "Cosmetic Specialist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
      experience: "15+ years"
    },
    {
      name: "Dr. Michael Park",
      role: "Orthodontist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
      experience: "12+ years"
    }
  ];

  const testimonials = [
    {
      name: "Emma Thompson",
      text: "The most comfortable dental experience I've ever had. Dr. Chen and her team are amazing!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "David Wilson",
      text: "Professional, modern facility with a caring touch. Highly recommend their cosmetic services.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <Hero />

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care using the latest technology and techniques
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Contact Strip */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Call Us</p>
                <p className="font-semibold">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Working Hours</p>
                <p className="font-semibold">Mon-Fri: 9:00-18:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold">123 Dental Street, NY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Doctors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your oral health
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our patients say about their experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Schedule Your Visit?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards a healthier smile
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2 mx-auto">
            <Calendar className="h-5 w-5" />
            Book Appointment
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;