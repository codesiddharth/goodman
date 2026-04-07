import { Award, Target, Heart, ShieldCheck } from 'lucide-react';
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

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div ref={heroRef} className="bg-primary-950 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.img 
            style={{ y }}
            src="https://picsum.photos/seed/medicalteam2/1920/1080" 
            alt="Medical Team Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div {...fadeUp} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Goodmans Rescue</h1>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Over two decades of unwavering commitment to saving lives through rapid medical transport and pre-hospital care.
          </p>
        </motion.div>
      </div>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">20+ Years of Excellence in Medical Assistance</h3>
              <p className="text-lg text-gray-600 mb-6">
                Founded in New Delhi, Goodmans Rescue is a doctor-led medical assistance company with over 20 years of experience. We began with a simple yet profound mission: to provide safe, rapid, and reliable medical transport for patients in critical need.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we stand as one of India's most trusted emergency response and aeromedical evacuation companies. We specialize in pre-hospital care, advanced life support ambulances, air ambulance services, and comprehensive medical training.
              </p>
              <div className="flex items-center space-x-4 bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                <Award className="w-12 h-12 text-primary-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Doctor-Led Team</h4>
                  <p className="text-sm text-gray-600">Every mission is overseen by experienced medical professionals.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/doctors/800/1000"
                alt="Medical Professionals"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="text-4xl font-heading font-bold text-primary-600 mb-1">20+</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeUp} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver rapid, safe, and compassionate medical transport services globally. We strive to be the lifeline for patients in distress, ensuring seamless bed-to-bed transfers with the highest standard of pre-hospital care.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the globally recognized leader in emergency medical assistance, setting industry benchmarks for patient safety, operational excellence, and technological innovation in medical transport.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Detailed */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">The Goodmans Rescue Advantage</h2>
            <p className="text-lg text-gray-600">
              What sets us apart in the critical field of medical evacuation and emergency response.
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
                title: "Doctor-Led Operations",
                desc: "Our medical crew consists of experienced doctors and paramedics, ensuring clinical excellence on every mission."
              },
              {
                title: "Advanced Life Support",
                desc: "We utilize the latest transport ventilators, multi-parameter monitors, and specialized ICU equipment."
              },
              {
                title: "Global Network",
                desc: "Strong relationships with international hospitals, aviation authorities, and ground handling agents for smooth operations."
              },
              {
                title: "Comprehensive Services",
                desc: "From ground ambulances to charter flights and EMS training, we cover all aspects of emergency medical assistance."
              },
              {
                title: "Bed-to-Bed Service",
                desc: "Complete logistical management including ground ambulances at both ends, hospital admissions, and flight clearances."
              },
              {
                title: "24/7 Control Center",
                desc: "Our operations team is available around the clock to coordinate complex missions and provide immediate response."
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeUp} className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary-50 p-3 rounded-xl flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
