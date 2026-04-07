import { ArrowRight, Plane, Shield, Clock, Globe2, Activity, Users, PhoneCall, HeartPulse, Stethoscope, BookOpen, Crown, Home as HomeIcon, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.2 }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 0]);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "New Delhi",
      text: "When my father suffered a stroke, Goodmans Rescue handled everything. The ground ambulance arrived in minutes, and the medical team was incredibly professional. They truly saved his life.",
      rating: 5,
      avatarId: 11
    },
    {
      name: "Sarah Jenkins",
      location: "International Transfer",
      text: "The level of care provided during my sister's air transport was exceptional. The flight nurse never left her side, and the operations team kept us updated every hour. Highly recommend their services.",
      rating: 5,
      avatarId: 44
    },
    {
      name: "Dr. Amit Patel",
      location: "Referring Physician",
      text: "I have worked with several aeromedical companies, but Goodmans Rescue stands out for their clinical excellence. Their equipment is top-notch, and their doctors are highly skilled. A trusted partner.",
      rating: 5,
      avatarId: 53
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            style={{ y, opacity }}
            src="https://picsum.photos/seed/ambulance/1920/1080"
            alt="Air Ambulance"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-800/50 rounded-full px-4 py-2 mb-8 border border-primary-700 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-primary-100">Available 24/7 for Emergencies</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              Emergency Medical Assistance & <span className="text-primary-400">Air Ambulance</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Doctor-led pre-hospital care and patient transport with over 30+ years of experience. Based in New Delhi, serving globally.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+919810012126"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-primary-500/30"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Book Ambulance</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-gray-100 relative z-20 -mt-10 mx-4 sm:mx-6 lg:mx-8 rounded-2xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-gray-100"
          >
            {[
              { number: "30+", label: "Years Experience" },
              { number: "100%", label: "Doctor-Led Care" },
              { number: "10k+", label: "Patients Transported" },
              { number: "24/7", label: "Emergency Response" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center px-4">
                <div className="text-4xl font-heading font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Comprehensive Medical Transport Solutions</h3>
            <p className="text-lg text-gray-600">
              We offer end-to-end medical evacuation services tailored to the patient's specific condition and location.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Activity,
                title: "Ground Ambulance",
                desc: "BLS and ACLS equipped ambulances for emergency and non-emergency transport, including inter-hospital transfers.",
                link: "/ground-ambulance"
              },
              {
                icon: Plane,
                title: "Air Ambulance",
                desc: "Domestic & international patient transfer via charter aircraft and commercial airline stretcher services with ICU setup.",
                link: "/air-ambulance"
              },
              {
                icon: Shield,
                title: "Standby Medical Services",
                desc: "Comprehensive event medical coverage with on-site doctors and paramedics for immediate response.",
                link: "/standby-medical"
              },
              {
                icon: BookOpen,
                title: "EMS Training",
                desc: "Professional CPR, First Aid, and comprehensive emergency medical training programs.",
                link: "/ems-training"
              },
              {
                icon: Crown,
                title: "Goodmans Privé",
                desc: "Concierge healthcare for the world's most discerning travellers.",
                link: "/goodmans_prive_web.html"
              }
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                {service.link.endsWith('.html') ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 font-medium flex items-center hover:text-primary-700"
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link to={service.link} className="text-primary-600 font-medium flex items-center hover:text-primary-700">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary-100 rounded-3xl transform -rotate-3 scale-105 z-0"></div>
              <img
                src="/helicopter.png"
                alt="Medical Team"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Goodmans Rescue</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Uncompromising Safety & Care</h3>
              <p className="text-lg text-gray-600 mb-8">
                When every second counts, experience matters. Our doctor-led team ensures the highest standards of pre-hospital care and medical transport.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Stethoscope, title: "Doctor-Led Team", desc: "Every mission is overseen by experienced medical professionals." },
                  { icon: Globe2, title: "Global Reach", desc: "Seamless domestic and international patient transfers." },
                  { icon: HeartPulse, title: "ICU Support", desc: "Advanced life support and ICU setups available in our ambulances and flights." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 bg-primary-50 p-3 rounded-lg group-hover:bg-primary-100 transition-colors">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                      <p className="mt-1 text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">What Our Patients Say</h3>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeUp} className="bg-white p-8 rounded-3xl border border-slate-100 relative shadow-sm hover:shadow-md transition-shadow">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-50" />
                <div className="flex space-x-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 relative z-10 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4 relative z-10">
                  <img 
                    src={`https://i.pravatar.cc/150?img=${testimonial.avatarId}`} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/hospital/1920/1080')] bg-cover bg-center"></div>
        <motion.div {...fadeUp} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Need Immediate Medical Transport?</h2>
          <p className="text-primary-100 text-lg mb-10">
            Our operations center is standing by 24/7 to assist you. Contact us now for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="tel:+919810012126" className="bg-white text-primary-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center shadow-xl">
              <PhoneCall className="w-5 h-5" />
              <span>+91 9810012126</span>
            </a>
            <Link to="/contact" className="bg-primary-600 text-white border border-primary-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors w-full sm:w-auto justify-center flex shadow-xl">
              Book Ambulance
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
