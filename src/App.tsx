import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Users,
  ChevronRight,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-bold font-display ${scrolled ? 'text-blue-600' : 'text-blue-600'}`}>
              Marg<span className="text-orange-500">ERP</span>
            </span>
            <span className="ml-2 text-xs font-semibold text-slate-500 hidden sm:block uppercase tracking-wider">Tamil Nadu</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 hover:text-blue-600 block px-3 py-4 text-base font-medium border-b border-slate-50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 py-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-blue-600 text-white block text-center px-5 py-3 rounded-xl text-base font-semibold hover:bg-blue-700 transition-all"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-100/50 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Authorized Marg ERP Gold Partner</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight mb-6 text-slate-900">
              Transform Your Business with <span className="text-blue-600">Marg ERP</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              The most trusted business management software in Tamil Nadu. Simplify accounting, inventory, and GST compliance with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group"
              >
                Free Demo Request
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 bg-white border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-all"
              >
                Explore Features
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-orange-400 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 font-medium">Trusted by 5000+ Businesses in TN</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 lg:mt-0 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/erp-dashboard/800/600"
                alt="Marg ERP Dashboard"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-400/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/10 rounded-full -z-10"></div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 glass-card p-4 rounded-2xl hidden sm:block"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Compliance</p>
                  <p className="text-sm font-bold">100% GST Ready</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/business-meeting/600/700"
              alt="About Marg ERP Tamil Nadu"
              className="rounded-3xl shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-2xl max-w-xs">
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-sm font-medium opacity-90">Years of Excellence in ERP Implementation across Tamil Nadu</p>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">About Marg ERP</h2>
            <h3 className="text-4xl font-bold font-display text-slate-900 mb-6 leading-tight">
              Empowering Small & Medium Enterprises Since 1992
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Marg ERP is a leading software provider in India, specializing in inventory and accounting solutions. As authorized dealers in Tamil Nadu, we provide end-to-end support for businesses looking to digitize their operations.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Localized support in Tamil & English',
                'On-site implementation and training',
                'Customized solutions for 21+ industries',
                'Dedicated support desk for quick resolution'
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="mt-1 bg-blue-100 text-blue-600 rounded-full p-1">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl">
                <p className="text-3xl font-bold text-slate-900 mb-1">2.5M+</p>
                <p className="text-sm text-slate-500 font-medium">Users Worldwide</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl">
                <p className="text-3xl font-bold text-slate-900 mb-1">1000+</p>
                <p className="text-sm text-slate-500 font-medium">Partners in India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Inventory Management',
      desc: 'Track stock levels, set reorder points, and manage multiple warehouses effortlessly.',
      icon: <Zap className="text-orange-500" />,
      color: 'bg-orange-50'
    },
    {
      title: 'GST Billing & Filing',
      desc: 'Generate GST-compliant invoices and file returns directly from the software.',
      icon: <ShieldCheck className="text-blue-500" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Financial Accounting',
      desc: 'Complete accounting from vouchers to balance sheets with automated entries.',
      icon: <BarChart3 className="text-green-500" />,
      color: 'bg-green-50'
    },
    {
      title: 'Reporting & Analytics',
      desc: 'Get 1000+ business reports to make data-driven decisions for your growth.',
      icon: <Users className="text-purple-500" />,
      color: 'bg-purple-50'
    },
    {
      title: 'Mobile App Integration',
      desc: 'Access your business data on the go with our dedicated mobile applications.',
      icon: <MessageCircle className="text-pink-500" />,
      color: 'bg-pink-50'
    },
    {
      title: 'Omnichannel Sales',
      desc: 'Manage sales across retail, wholesale, and online platforms in one place.',
      icon: <ChevronRight className="text-indigo-500" />,
      color: 'bg-indigo-50'
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Powerful Features</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900 mb-6">
            Everything You Need to Run Your Business Smarter
          </h3>
          <p className="text-lg text-slate-600">
            Marg ERP is packed with features designed specifically for Indian businesses, ensuring compliance and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all"
            >
              <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mb-6`}>
                {React.cloneElement(f.icon as React.ReactElement, { size: 28 })}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Edition',
      price: '8,100',
      period: 'One Time',
      desc: 'Perfect for small retail shops and startups.',
      features: ['Single User', 'Inventory Management', 'GST Billing', 'Basic Reporting', 'Email Support'],
      recommended: false
    },
    {
      name: 'Silver Edition',
      price: '12,600',
      period: 'One Time',
      desc: 'Best for growing businesses and wholesalers.',
      features: ['Multi User (LAN)', 'Advanced Inventory', 'GST Filing', '1000+ Reports', 'Priority Support', 'Mobile App Access'],
      recommended: true
    },
    {
      name: 'Gold Edition',
      price: '25,200',
      period: 'One Time',
      desc: 'Complete solution for large enterprises.',
      features: ['Unlimited Users', 'Multi-Branch Sync', 'Payroll Management', 'Customized Reports', 'Dedicated Account Manager', 'API Integration'],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Pricing Plans</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900 mb-6">
            Transparent Pricing for Every Business Size
          </h3>
          <p className="text-lg text-slate-600">
            Choose the edition that fits your business needs. All prices are exclusive of GST.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-3xl border-2 transition-all ${
                plan.recommended 
                  ? 'border-blue-600 shadow-2xl shadow-blue-100 scale-105 z-10 bg-white' 
                  : 'border-slate-100 bg-slate-50'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
              <p className="text-slate-500 text-sm mb-6">{plan.desc}</p>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-slate-900">₹{plan.price}</span>
                <span className="text-slate-500 ml-2">/{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center space-x-3 text-sm">
                    <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl font-bold transition-all ${
                  plan.recommended
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-slate-500 text-sm">
          * Implementation and training charges may vary based on requirements.
        </p>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', business: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Contact Us</h2>
            <h3 className="text-4xl lg:text-5xl font-bold font-display mb-8 leading-tight">
              Ready to Scale Your Business? Let's Talk.
            </h3>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Our experts are ready to help you choose the right Marg ERP solution for your specific business needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-3 rounded-xl text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase mb-1">Call Us</p>
                  <p className="text-xl font-bold">+91 98765 43210</p>
                  <p className="text-slate-500">Mon - Sat, 9:00 AM - 7:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-3 rounded-xl text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase mb-1">Email Us</p>
                  <p className="text-xl font-bold">sales@margerptn.com</p>
                  <p className="text-slate-500">We reply within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-3 rounded-xl text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase mb-1">Visit Us</p>
                  <p className="text-xl font-bold">123, Business Hub, Anna Salai</p>
                  <p className="text-slate-500">Chennai, Tamil Nadu - 600002</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0">
            <div className="bg-white rounded-3xl p-8 lg:p-10 text-slate-900">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-slate-600">Thank you for reaching out. Our team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="+91 00000 00000"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Business Type</label>
                    <select
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      value={formState.business}
                      onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                    >
                      <option value="">Select Industry</option>
                      <option value="retail">Retail Shop</option>
                      <option value="pharma">Pharmacy / Healthcare</option>
                      <option value="wholesale">Wholesale / Distribution</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="Tell us about your requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                  >
                    Request Free Demo
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <span className="text-2xl font-bold font-display text-white mb-6 block">
              Marg<span className="text-orange-500">ERP</span> <span className="text-slate-500 text-sm font-normal">Tamil Nadu</span>
            </span>
            <p className="max-w-sm mb-6">
              Authorized Gold Partner for Marg ERP in Tamil Nadu. Providing world-class business management solutions to SMEs since 2008.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pharma ERP</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Retail ERP</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Jewellery ERP</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FMCG ERP</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Marg ERP Dealer Tamil Nadu. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=I'm%20interested%20in%20Marg%20ERP%20demo"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
