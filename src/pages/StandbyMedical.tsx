import { Shield, Users, Stethoscope, Clock, CheckCircle2, PhoneCall } from 'lucide-react';
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
  transition: { staggerChildren: 0.15 }
};

export default function StandbyMedical() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div ref={heroRef} className="bg-primary-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.img 
            style={{ y }}
            src="https://picsum.photos/seed/standby/1920/1080" 
            alt="Standby Medical Services" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/80 to-transparent"></div>
        </div>
        <motion.div {...fadeUp} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary-800/50 rounded-full px-4 py-2 mb-6 border border-primary-700 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-primary-200" />
              <span className="text-sm font-medium text-primary-100">Event Medical Coverage</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Standby Medical Services
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Comprehensive medical coverage for corporate events, sports tournaments, and large gatherings to ensure the safety of all attendees.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-primary-500/30"
              >
                <span>Request Coverage</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key Features */}
      <section className="py-16 bg-white border-b border-gray-100 relative z-20 -mt-8 mx-4 sm:mx-6 lg:mx-8 rounded-2xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { icon: Stethoscope, title: "On-Site Doctors", desc: "Qualified physicians ready to handle any medical emergency." },
              { icon: Users, title: "Paramedic Teams", desc: "Trained paramedics for rapid on-ground response." },
              { icon: Shield, title: "Fully Equipped", desc: "Standby ACLS/BLS ambulances and medical camps." },
              { icon: Clock, title: "Risk Assessment", desc: "Pre-event medical risk evaluation and planning." }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center px-4">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">How It Works</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Our Event Coverage Process</h3>
            <p className="text-lg text-gray-600">
              We meticulously plan and execute medical coverage to mitigate risks and ensure rapid response.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary-100 -translate-y-1/2 z-0"></div>
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-4 gap-8 relative z-10"
            >
              {[
                { step: "01", title: "Consultation", desc: "We discuss your event size, nature, and specific medical requirements." },
                { step: "02", title: "Risk Assessment", desc: "Our experts evaluate potential risks and create a customized medical plan." },
                { step: "03", title: "Deployment", desc: "We set up medical camps and position ambulances and personnel on-site." },
                { step: "04", title: "Active Coverage", desc: "Continuous monitoring and immediate response during the entire event." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg shadow-primary-600/30">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Events We Cover</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Tailored Medical Solutions for Any Gathering</h3>
              <p className="text-lg text-gray-600 mb-8">
                From high-adrenaline sports to massive corporate summits, we have the expertise to keep your attendees safe.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Sports Tournaments & Marathons: Specialized trauma care and rapid evacuation.",
                  "Corporate Events & Conferences: Discreet and professional medical support.",
                  "Concerts & Music Festivals: Handling large crowds and diverse medical needs.",
                  "Film Shoots & Productions: On-set medics and standby ambulances."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/eventmedical/800/1000"
                alt="Event Medical Coverage"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/hospital/1920/1080')] bg-cover bg-center"></div>
        <motion.div {...fadeUp} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Planning an Event?</h2>
          <p className="text-primary-100 text-lg mb-10">
            Ensure the safety of your attendees with our professional standby medical services. Contact us for a customized coverage plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="tel:+919810012126" className="bg-white text-primary-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 w-full sm:w-auto justify-center shadow-xl">
              <PhoneCall className="w-5 h-5" />
              <span>+91 9810012126</span>
            </a>
            <Link to="/contact" className="bg-primary-600 text-white border border-primary-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors w-full sm:w-auto justify-center flex shadow-xl">
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
