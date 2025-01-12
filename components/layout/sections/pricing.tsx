"use client"

import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Check, Zap } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for beginners looking to start their trading journey",
    features: [
      "Basic market analysis techniques",
      "Introduction to risk management",
      "Access to beginner-friendly strategies",
      "Weekly live trading sessions",
      "Community forum access"
    ],
    cta: "Start Learning"
  },
  {
    name: "Pro Trader",
    price: "$99",
    description: "For serious traders ready to take their skills to the next level",
    features: [
      "Advanced technical analysis",
      "Comprehensive risk management strategies",
      "Access to all trading strategies",
      "Daily live trading sessions",
      "Priority support",
      "One-on-one mentoring sessions"
    ],
    cta: "Upgrade to Pro",
    popular: true
  },
  {
    name: "Master Class",
    price: "$199",
    description: "Elite program for traders aiming for professional-level expertise",
    features: [
      "Expert-level market analysis",
      "Advanced risk management and portfolio strategies",
      "Exclusive high-probability setups",
      "24/7 live trading room access",
      "Personal trading coach",
      "Algorithmic trading introduction"
    ],
    cta: "Join Master Class"
  }
]

export function PricingSection() {
  const [hoveredTier, setHoveredTier] = React.useState<string | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
            Choose Your Path to Success
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Select the plan that best fits your trading goals and experience level. 
            Unlock the potential of the markets with our expert guidance.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              className={`relative bg-gray-800 rounded-2xl p-8 shadow-2xl transition-all duration-300 ${
                tier.popular ? 'border-2 border-[#4a8eff]' : ''
              }`}
              onMouseEnter={() => setHoveredTier(tier.name)}
              onMouseLeave={() => setHoveredTier(null)}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <AnimatePresence>
                {hoveredTier === tier.name && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#2b5ba8]/20 to-transparent rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              {tier.popular && (
                <Badge 
                  variant="secondary" 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4a8eff] text-white px-4 py-1 text-sm font-semibold"
                >
                  Most Popular
                </Badge>
              )}
              <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
              <div className="text-4xl font-bold text-[#4a8eff] mb-4">{tier.price}<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">{tier.description}</p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                  >
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className={`w-full py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-[#4a8eff] hover:bg-[#2b5ba8] text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  {tier.cta}
                  {tier.popular && <Zap className="ml-2 w-5 h-5" />}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not sure which plan is right for you?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with one of our expert traders to find the perfect fit for your trading journey.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-transparent border-2 border-[#4a8eff] text-[#4a8eff] hover:bg-[#4a8eff] hover:text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Book a Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}