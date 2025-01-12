"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp, Award, Target, Brain } from "lucide-react";
import { motion } from "framer-motion";

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
    image: "/marketanalysis.jpg",
  },
  {
    icon: Award,
    title: "Proven Strategies",
    description: "Time-tested trading strategies for consistent profits",
    image: "/tradingstrategiesimg.jpg",
  },
  {
    icon: Target,
    title: "Risk Management",
    description: "Advanced techniques to protect and grow your capital",
    image: "/riskmanagement.jpg",
  },
  {
    icon: Brain,
    title: "Trading Psychology",
    description: "Master the mental game for better decision-making",
    image: "/tradingpsyc.jpg",
  },
];

const winningTrades: Trade[] = [
  {
    pair: "EUR/USD",
    profit: "$198",
    percentage: "2.5%",
    date: "2023-05-15",
    image: "/eurusdprofits.jpg",
  },
  {
    pair: "CRASH 500",
    profit: "$362",
    percentage: "4.2%",
    date: "2023-05-14",
    image: "/crash500analysis.jpg",
  },
  {
    pair: "USD/CHF",
    profit: "$950",
    percentage: "1.8%",
    date: "2023-05-13",
    image: "/usdchfanalysis.jpg",
  },
  {
    pair: "boom 500 and crash 500",
    profit: "$950",
    percentage: "1.8%",
    date: "2023-05-13",
    image: "/boomandcrashprofits.jpg",
  },
];

export function AboutSection({ id }: { id: string }) {
  return (
    <section id={id} className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
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
            backed by years of successful trading across multiple financial
            instruments.
          </p>
        </motion.div>

        {/* Biography of Big FX (Emmanuel Louis) */}
        <motion.div
  className="text-center mb-16 px-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h3 className="text-4xl font-bold text-white mb-6">
    Meet Emmanuel Ojoajogun Jacob{" "}
    <span className="text-[#4a8eff]">Big FX</span>
  </h3>
  <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
    {/* Image */}
    <div className="relative w-60 h-60 md:w-80 md:h-80">
      <Image
        src="/agoatofanemma.jpg"
        alt="Emmanuel Louis"
        width={320}
        height={320}
        className="rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4a8eff] to-[#2b5ba8] opacity-30" />
    </div>

    {/* Text */}
    <div className="max-w-lg text-left text-gray-300 px-4">
      <p className="text-lg md:text-xl mb-4">
        Emmanuel Ojaojogun Jacob, known in the trading world as Big FX, is a
        seasoned digital entrepreneur with a deep passion for financial markets.
        With years of experience in the world of forex and financial trading, Big
        FX has developed proven strategies that empower traders to excel in various
        market conditions.
      </p>
      <p className="text-lg md:text-xl">
        Having worked in the digital marketing and fintech space, Big FX understands
        the intricate connections between market psychology, technical analysis, and
        risk management. His goal is to make trading accessible and profitable for
        both novice and seasoned traders alike.
      </p>
    </div>
  </div>
</motion.div>


        {/* Features Section */}
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
                {/* Image with description inside */}
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
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

        {/* Winning Trades Section */}
        {/* Winning Trades Section */}
<motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{
    opacity: { duration: 1 },
    x: { duration: 1, type: "spring" },
  }}
>
  {/* Winning Trades Header */}
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="text-4xl font-bold text-white mb-6">
      Our <span className="text-[#4a8eff]">Winning Trades</span>
    </h3>
    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
      Check out some of our most successful trades, showcasing our strategies and results across different pairs and assets.
    </p>
  </motion.div>

  {/* Map through winningTrades */}
  {winningTrades.map((trade, index) => (
    <motion.div
      key={trade.pair}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="overflow-hidden rounded-2xl shadow-2xl">
        {/* Trade Image */}
        <motion.img
          src={trade.image}
          alt={trade.pair}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{trade.pair}</h3>
          <p className="text-gray-300 text-lg">Profit: {trade.profit}</p>
          <p className="text-gray-300 text-lg">Percentage: {trade.percentage}</p>
          <p className="text-gray-300 text-lg">Date: {trade.date}</p>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
}
