import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PageTransition from '../components/layout/PageTransition';
import { CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'wedding',
    date: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
        if (res.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', service: 'wedding', date: '', message: '' });
        } else {
          setStatus('error');
        }
      } catch (err) {
        console.error("Submission Error:", err);
        setStatus('error');
      }
    };
  
    const handleWhatsApp = () => {
    const text = `Hi Robin, I'm interested in your ${formData.service} photography services. My name is ${formData.name}. My phone number is ${formData.phone}.`;
    window.open(`https://wa.me/918156965442?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Book a Session | Robin B R Photography Kerala</title>
        <meta name="description" content="Inquire about wedding, portrait, and baby photography sessions with Robin B R. Based in Kerala, serving all of South India." />
      </Helmet>
      <main className="pt-80 pb-32 bg-luxury-bg min-h-screen">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span className="text-gold-accent text-sm uppercase tracking-[0.5em] mb-8 block font-medium">Inquiry</span>
              <h1 className="text-6xl md:text-8xl font-display leading-[0.9] mb-12 text-luxury-primary">
                Let's Start Your <br /> <span className="italic font-light">Story</span>
              </h1>
              <p className="text-luxury-primary/60 text-lg font-body mb-20 max-w-md leading-relaxed">
                Whether you're planning a dream wedding or capturing the first days of a child's life, I'd love to hear from you. 
                Our studio is dedicated to preserving your most precious moments with elegance.
              </p>

              <div className="space-y-16">
                <div className="flex border-l-[1px] border-gold-accent/40 pl-10">
                  <div>
                    <p className="text-gold-accent text-xs uppercase tracking-[0.4em] font-medium mb-4">Our Home</p>
                    <p className="text-luxury-primary text-3xl font-display italic">Kerala, India</p>
                  </div>
                </div>
                <div className="flex border-l-[1px] border-gold-accent/40 pl-10">
                  <div>
                    <p className="text-gold-accent text-xs uppercase tracking-[0.4em] font-medium mb-4">Say Hello</p>
                    <a href="mailto:robeebr@gmail.com" className="text-luxury-primary text-3xl font-display italic hover:text-gold-accent transition-colors">robeebr@gmail.com</a>
                  </div>
                </div>
                <div className="flex border-l-[1px] border-gold-accent/40 pl-10">
                  <div>
                    <p className="text-gold-accent text-xs uppercase tracking-[0.4em] font-medium mb-4">WhatsApp</p>
                    <button onClick={handleWhatsApp} className="text-luxury-primary text-3xl font-display italic hover:text-gold-accent transition-colors">+91 815 696 5442</button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="bg-white/40 p-12 md:p-16 border border-white/60 backdrop-blur-2xl rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)]"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="text-gold-accent mx-auto mb-8 stroke-[1px]" size={64} />
                    <h2 className="text-4xl font-display mb-6 text-luxury-primary">Message Sent</h2>
                    <p className="text-luxury-primary/60 mb-10 leading-relaxed text-lg">Your inquiry has been received. <br /> Expect a response within 24 hours.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-xs uppercase tracking-[0.4em] font-semibold text-gold-accent border-b border-gold-accent/30 pb-2 hover:text-gold-dark transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-10"
                  >
                    <div className="space-y-10">
                      <div className="relative">
                        <label className="text-xs uppercase tracking-[0.4em] text-gold-accent font-medium mb-3 block">Full Name</label>
                        <input 
                          type="text" required 
                          className="w-full bg-transparent border-b border-black/10 py-4 text-luxury-primary focus:border-gold outline-none transition-all placeholder:text-black/10 text-lg font-light"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="relative">
                        <label className="text-xs uppercase tracking-[0.4em] text-gold-accent font-medium mb-3 block">Email Address</label>
                        <input 
                          type="email" required 
                          className="w-full bg-transparent border-b border-black/10 py-4 text-luxury-primary focus:border-gold outline-none transition-all placeholder:text-black/10 text-lg font-light"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="relative">
                        <label className="text-xs uppercase tracking-[0.4em] text-gold-accent font-medium mb-3 block">Phone Number</label>
                        <input 
                          type="tel" required 
                          className="w-full bg-transparent border-b border-black/10 py-4 text-luxury-primary focus:border-gold outline-none transition-all placeholder:text-black/10 text-lg font-light"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="Your Phone Number"
                        />
                      </div>
                      <div className="relative">
                        <label className="text-xs uppercase tracking-[0.4em] text-gold-accent font-medium mb-3 block">Your Story</label>
                        <textarea 
                          rows="3" required 
                          className="w-full bg-transparent border-b border-black/10 py-4 text-luxury-primary focus:border-gold outline-none transition-all resize-none placeholder:text-black/10 text-lg font-light"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Event type, date, or any specific requests..."
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-luxury-primary text-white text-xs uppercase tracking-[0.5em] font-bold py-7 hover:bg-gold transition-all duration-700 disabled:opacity-50 shadow-xl shadow-luxury-primary/10"
                    >
                      {status === 'loading' ? 'Processing...' : 'Send Inquiry'}
                    </button>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-black/5">
                      <div className="text-center w-full sm:w-auto">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-primary/40 mb-6">WhatsApp</p>
                        <button 
                          onClick={handleWhatsApp} 
                          type="button"
                          className="inline-flex items-center space-x-4 bg-[#075E54] text-white px-6 md:px-10 py-5 rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-xl shadow-[#075E54]/20 group w-full sm:w-auto justify-center"
                        >
                          <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                          <span className="text-[11px] uppercase tracking-[0.3em] font-bold">Message</span>
                        </button>
                      </div>
                      <div className="text-center w-full sm:w-auto">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-luxury-primary/40 mb-6">Instagram</p>
                        <a 
                          href="https://www.instagram.com/robinbr_photography/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-4 text-white px-6 md:px-10 py-5 rounded-full hover:opacity-90 transition-all duration-300 shadow-xl shadow-pink-500/20 group w-full sm:w-auto justify-center"
                          style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
                        >
                          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                          <span className="text-[11px] uppercase tracking-[0.3em] font-bold">Direct Message</span>
                        </a>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Contact;
