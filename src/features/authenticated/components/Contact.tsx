import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../../../components/ui/button";

const Contact = () => {
  return (
    <div className="w-full px-4 md:px-10 py-12">
      <section className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="mt-3 max-w-2xl mx-auto text-slate-700 dark:text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Have questions about AquaSense? Want support or collaboration? We’re
          here to help!
        </motion.p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className="p-8 bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl backdrop-blur-xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
            Get in Touch
          </h2>
          <div className="flex items-center gap-4 mb-6">
            <Mail className="text-sky-600 dark:text-sky-400" size={28} />
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">
                Email
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                support@aquasense.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <Phone className="text-sky-600 dark:text-sky-400" size={28} />
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">
                Phone
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                +91 98765 43210
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-sky-600 dark:text-sky-400" size={28} />
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">
                Location
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Kolkata, West Bengal, India
              </p>
            </div>
          </div>
        </motion.div>
        <motion.form
          className="p-8 bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl backdrop-blur-xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
            Send a Message
          </h2>
          <div className="mb-4">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Name
            </label>
            <input
              type="text"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-slate-100/60 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-slate-100/60 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full mt-1 px-4 py-2 rounded-xl bg-slate-100/60 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-sky-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <Button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-lg">
            Send Message
            <Send size={18} />
          </Button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
