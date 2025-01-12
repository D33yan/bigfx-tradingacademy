"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from '@/hooks/use-toast'
import emailjs from 'emailjs-com'

export default function ContactSection({ id }: { id: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      const result = await emailjs.send(
        'service_hg12gol',   // EmailJS service ID
        'template_gzvlx1p',  // EmailJS template ID
        templateParams,
        'afWjGnBuYvb7WSAhy'      // EmailJS user ID
      )

      // Show success message
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      })

      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      // Handle error
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id={id} className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2b5ba8] via-[#4a8eff] to-[#63a4ff] bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Have questions about our trading strategies or want to learn more? 
            Reach out to us, and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 text-white border-gray-700 focus:border-[#4a8eff]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 text-white border-gray-700 focus:border-[#4a8eff]"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 text-white border-gray-700 focus:border-[#4a8eff]"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 text-white border-gray-700 focus:border-[#4a8eff] h-32"
                />
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#2b5ba8] to-[#4a8eff] text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Additional Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#4a8eff] mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-white">Email</h4>
                <p className="text-gray-300">louisemmy039@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#4a8eff] mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-white">Phone</h4>
                <p className="text-gray-300"> +234 703-229-1679</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#4a8eff] mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-white">Address</h4>
                <p className="text-gray-300">Lagos, Nigeria</p>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[ /* Social Media Links */ ]} {/* Continue with social media icons */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
