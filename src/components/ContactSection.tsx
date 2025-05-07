import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS values
const SERVICE_ID = 'service_hlwjj7u';
const TEMPLATE_ID = 'template_2msmgbh';
const PUBLIC_KEY = '6TIQC58a8RPSP1Jz6';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+49-174-272-3667',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+91-7200566721',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'kumaresan.plm@gmail.com',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
            Get In Touch
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          <ScrollReveal>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-4 text-accent">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{info.label}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

              {submitSuccess ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
                  Thank you for your message! I'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
