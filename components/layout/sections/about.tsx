'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, Award, Target, Brain, LineChart, ArrowUpRight, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

interface Trade {
  pair: string;
  profit: string;
  percentage: string;
  date: string;
  image: string;
}

const features: Feature[] = [
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "Deep understanding of market trends and patterns",
    image: "/marketanalysis.jpg"
  },
  {
    icon: Award,
    title: "Proven Strategies",
    description: "Time-tested trading strategies for consistent profits",
    image: "/tradingstrategiesimg.jpg"
  },
  {
    icon: Target,
    title: "Risk Management",
    description: "Advanced techniques to protect and grow your capital",
    image: "/riskmanagement.jpg"
  },
  {
    icon: Brain,
    title: "Trading Psychology",
    description: "Master the mental game for better decision-making",
    image: "/tradingpsyc.jpg"
  }
]

const winningTrades: Trade[] = [
  { pair: "EUR/USD", profit: "$198", percentage: "2.5%", date: "2023-05-15", image: "/eurusdprofits.jpg" },
  { pair: "CRASH 300 AND BOOM 300", profit: "$362", percentage: "4.2%", date: "2023-05-14", image: "/bancprofits.jpg" },
  { pair: "USD/CHF", profit: "$950", percentage: "1.8%", date: "2023-05-13", image: "/usdchfanalysis.jpg" },
  { pair: "Gold", profit: "$720", percentage: "3.1%", date: "2023-05-12", image: "/placeholder.svg?height=800&width=1200&text=Gold+Trade+Chart" },
]

export function AboutSection() {
  const [currentTradeIndex, setCurrentTradeIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        nextTrade();
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, currentTradeIndex]);

  const nextTrade = () => {
    setDirection(1)
    setCurrentTradeIndex((prevIndex) => (prevIndex + 1) % winningTrades.length)
  }

  const prevTrade = () => {
    setDirection(-1)
    setCurrentTradeIndex((prevIndex) => (prevIndex - 1 + winningTrades.length) % winningTrades.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

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
            Mastering the Markets
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Big FX brings you cutting-edge strategies and deep market insights, 
            backed by years of successful trading across multiple financial instruments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <motion.img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <feature.icon className="w-12 h-12 text-[#4a8eff] mb-3" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-lg">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Our Winning <span className="text-[#4a8eff]">Approach</span>
            </h3>
            <p className="text-gray-300 text-lg">
              At Big FX, we combine technical analysis, fundamental insights, and 
              advanced risk management to create a robust trading system that delivers 
              consistent results across various market conditions.
            </p>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mt-1 p-2 bg-[#2b5ba8] rounded-full">
                  <LineChart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Advanced Technical Analysis</h4>
                  <p className="text-gray-400">Utilizing cutting-edge indicators and chart patterns for precise entry and exit points.</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="mt-1 p-2 bg-[#2b5ba8] rounded-full">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Strategic Risk Management</h4>
                  <p className="text-gray-400">Implementing sophisticated risk control measures to protect and grow your trading capital.</p>
                </div>
              </motion.li>
            </ul>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#2b5ba8] hover:bg-[#4a8eff] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Learn Our Strategies
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/trading-analysis.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white p-4">
              <h4 className="text-2xl font-bold mb-2">Live Trading Analysis</h4>
              <p className="text-lg text-gray-300">
                Join our daily sessions to see our strategies in action
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Recent <span className="text-[#4a8eff]">Winning Trades</span>
          </h3>
          <div className="relative aspect-[16/9] max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentTradeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                className="absolute w-full h-full"
              >
                <motion.img 
                  src={winningTrades[currentTradeIndex].image} 
                  alt={`Trade ${winningTrades[currentTradeIndex].pair}`} 
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-[#2b5ba8] text-white text-lg px-3 py-1">
                      {winningTrades[currentTradeIndex].pair}
                    </Badge>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <ArrowUpRight className="text-green-500 w-6 h-6" />
                    </motion.div>
                  </div>
                  <div className="text-3xl font-bold mb-1">{winningTrades[currentTradeIndex].profit}</div>
                  <div className="text-lg text-gray-300 flex justify-between">
                    <span>{winningTrades[currentTradeIndex].percentage} Profit</span>
                    <span>{winningTrades[currentTradeIndex].date}</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
              </motion.div>
            </AnimatePresence>
            <motion.button
              onClick={() => {
                prevTrade();
                setIsAutoPlay(false);
              }}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={() => {
                nextTrade();
                setIsAutoPlay(false);
              }}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {winningTrades.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentTradeIndex ? 'bg-[#4a8eff]' : 'bg-gray-400'
                  }`}
                  onClick={() => {
                    setCurrentTradeIndex(index);
                    setIsAutoPlay(false);
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-[#4a8eff]">Trading Journey?</span>
          </h3>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Join Big FX today and gain access to our proven strategies, expert analysis, 
            and supportive community of traders.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-[#2b5ba8] hover:bg-[#4a8eff] text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Now <DollarSign className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}