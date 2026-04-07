import { Plane, Users, Activity, Stethoscope, Globe, HeartPulse, BookOpen, Crown, Home as HomeIcon, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function Services() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const services = [
    {
      id: "ground-ambulance",
      icon: Activity,
      title: "Ground Ambulance",
      description: "Advanced Life Support (ALS) and Basic Life Support (BLS) ambulances for emergency and non-emergency transport.",
      image: "https://picsum.photos/seed/groundambulance/2000/1000",
      link: "/ground-ambulance",
      benefits: [
        "Fully equipped with ICU setup (Ventilators, Defibrillators)",
        "Accompanied by experienced doctors and paramedics",
        "Inter-hospital and inter-city transfers",
        "Rapid response times"
      ],
      process: "Upon receiving your call, our dispatch team evaluates the medical requirement and immediately sends the appropriately equipped ambulance with a medical team."
    },
    {
      id: "air-ambulance",
      icon: Plane,
      title: "Air Ambulance",
      description: "Domestic and international patient transfer via charter aircraft and commercial airline stretcher services.",
      image: "https://picsum.photos/seed/airambulance/2000/1000",
      link: "/air-ambulance",
      benefits: [
        "Bed-to-bed transfer service",
        "Dedicated ICU-equipped charter flights",
        "Commercial stretcher and medical escort options",
        "Complete management of aviation and medical logistics"
      ],
      process: "We handle everything from medical clearance and flight booking to ground transport at both ends, ensuring a seamless bed-to-bed transfer."
    },
    {
      id: "standby-medical",
      icon: Shield,
      title: "Standby Medical Services",
      description: "Comprehensive medical coverage for corporate events, sports tournaments, and large gatherings.",
      image: "https://picsum.photos/seed/standby/2000/1000",
      link: "/standby-medical",
      benefits: [
        "On-site doctors, nurses, and paramedics",
        "Fully equipped standby ambulances",
        "Setup of temporary medical rooms/camps",
        "Customized medical risk assessment for events"
      ],
      process: "We assess the event's risk profile and deploy the necessary medical personnel and equipment to ensure immediate response to any health emergencies."
    },
    {
      id: "ems-training",
      icon: BookOpen,
      title: "EMS Training",
      description: "Professional emergency medical training programs for healthcare providers and corporate teams.",
      image: "https://picsum.photos/seed/emstraining/2000/1000",
      link: "/ems-training",
      benefits: [
        "Basic Life Support (BLS) & Advanced Cardiac Life Support (ACLS)",
        "First Aid and CPR certification",
        "Customized corporate wellness and safety workshops",
        "Training by certified medical professionals"
      ],
      process: "We offer both on-site and off-site training sessions, providing hands-on experience with modern medical mannequins and equipment."
    },
    {
      id: "prive",
      icon: Crown,
      title: "Goodmans Privé",
      description: "Concierge healthcare for the world's most discerning travellers.",
      image: "https://picsum.photos/seed/concierge/2000/1000",
      link: "/goodmans_prive_web.html",
      benefits: [
        "24/7 dedicated medical concierge",
        "Priority access to top specialists globally",
        "Luxury medical transport arrangements",
        "Personalized health management and travel planning"
      ],
      process: "Exclusive members receive a dedicated medical liaison available around the clock to coordinate all healthcare and medical travel needs globally."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div ref={heroRef} className="bg-primary-950 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <motion.img 
            style={{ y }}
            src="https://picsum.photos/seed/medicalservices/1920/1080" 
            alt="Medical Services Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div {...fadeUp} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Comprehensive emergency medical assistance and patient transport solutions.
          </p>
        </motion.div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
                  <service.icon className="w-16 h-16 text-primary-600 mb-6 relative z-10" />
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4 relative z-10">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 relative z-10">{service.description}</p>
                  
                  <div className="space-y-6 relative z-10">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary-600 mb-3">Key Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <span className="text-primary-500 mr-3 mt-1 text-lg leading-none">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-primary-600 mb-2">The Process</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{service.process}</p>
                    </div>
                    {service.link && (
                      <div className="pt-4">
                        {service.link.endsWith('.html') ? (
                          <a
                            href={service.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors"
                          >
                            Learn more about {service.title} <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        ) : (
                          <Link
                            to={service.link}
                            className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors"
                          >
                            Learn more about {service.title} <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="object-cover h-[500px] w-full transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary-50 py-20 border-t border-primary-100">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg text-gray-600 mb-8">Our medical directors are available 24/7 to evaluate the patient's condition and recommend the safest, most appropriate transport method.</p>
          <Link to="/contact" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30">
            Contact Us Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
