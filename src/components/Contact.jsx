import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ success: false, error: false, message: "" });

    try {
      const serviceId = "service_5hr2447";
      const templateId = "template_6tztbw9";
      const publicKey = "f4pBNONcU5wssorok";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        success: true,
        error: false,
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{ position: "relative", zIndex: 1000 }}
      className="border-b border-neutral-900 pb-20"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Get In <span className="text-neutral-500">Touch</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Contact Information */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-neutral-400">{CONTACT.address}</p>
            <p className="text-neutral-400">{CONTACT.phoneNo}</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-400 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                placeholder="Your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500"
                placeholder="Your message"
              ></textarea>
            </div>
            {submitStatus.message && (
              <div
                className={`p-3 rounded-md ${
                  submitStatus.success
                    ? "bg-green-900/50 text-green-300"
                    : "bg-red-900/50 text-red-300"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full px-6 py-3 ${
                isLoading
                  ? "bg-neutral-600 cursor-not-allowed"
                  : "bg-neutral-700 hover:bg-neutral-600"
              } text-white rounded-md transition-colors`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
