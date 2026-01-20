import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_ombx1xl",    
      "template_zfdivp8",   
      formRef.current,
      "uzDtVSG0KWZE7156V"     
    )
    .then(() => {
      setLoading(false);
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus(null), 5000);
    })
    .catch((error) => {
      console.error("FAILED...", error);
      setLoading(false);
      setStatus("error");
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Start a <span className="text-gradient">Conversation</span></h2>
            <p className="text-gray-400">Ready to build something amazing? I'm available for freelance & full-time roles.</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="user_name" 
                placeholder="Your Name" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 focus:outline-none transition-colors"
              />
              <input 
                type="email" 
                name="user_email" 
                placeholder="Your Email" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>
            <textarea 
              name="message" 
              placeholder="Tell me about your project..." 
              rows="5"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:border-cyan-500 focus:outline-none transition-colors"
            ></textarea>

            <button 
              type="submit" 
              disabled={loading}
              className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                status === "success" 
                ? "bg-green-600 text-white" 
                : "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-cyan-500/25"
              }`}
            >
              {loading ? <FaSpinner className="animate-spin" /> : 
               status === "success" ? <FaCheckCircle /> : <FaPaperPlane />}
              
              {loading ? "Sending..." : 
               status === "success" ? "Message Sent!" : "Send Message"}
            </button>

            {status === "error" && (
                <p className="text-red-400 text-center flex items-center justify-center gap-2 mt-4">
                    <FaExclamationCircle /> Failed to send. Please try again or email directly.
                </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;