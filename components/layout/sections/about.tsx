"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  TrendingUp,
  Award,
  Target,
  Brain,
  LineChart,
  ArrowUpRight,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
    pair: "CRASH 300 AND BOOM 300",
    profit: "$362",
    percentage: "4.2%",
    date: "2023-05-14",
    image: "/bandcprofits.jpg",
  },
  {
    pair: "USD/CHF",
    profit: "$950",
    percentage: "1.8%",
    date: "2023-05-13",
    image: "/usdchfanalysis.jpg",
  },
];

export function AboutSection({ id }: { id: string }) {
  const [currentTradeIndex, setCurrentTradeIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

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
    setDirection(1);
    setCurrentTradeIndex((prevIndex) => (prevIndex + 1) % winningTrades.length);
  };

  const prevTrade = () => {
    setDirection(-1);
    setCurrentTradeIndex(
      (prevIndex) =>
        (prevIndex - 1 + winningTrades.length) % winningTrades.length
    );
  };

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
  };

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
            Mastering the Markets
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Big FX brings you cutting-edge strategies and deep market insights,
            backed by years of successful trading across multiple financial
            instruments.
          </p>
        </motion.div>

        {/* Added Biography of Big FX (Emmanuel Louis) */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl font-bold text-white mb-6">
            Meet Emmanuel Louis <span className="text-[#4a8eff]">Big FX</span>
          </h3>
          <div className="flex justify-center items-center space-x-8">
            <Image
              src="/emmanuel-louis.jpg"  // Use the correct image path for Emmanuel Louis
              alt="Emmanuel Louis"
              className="w-48 h-48 rounded-full shadow-lg"
            />
            <div className="max-w-lg text-left text-gray-300">
              <p className="text-lg mb-4">
                Emmanuel Louis, known in the trading world as Big FX, is a seasoned digital entrepreneur with a
                deep passion for financial markets. With years of experience in the world of forex and financial
                trading, Big FX has developed proven strategies that empower traders to excel in various market
                conditions.
              </p>
              <p className="text-lg">
                Having worked in the digital marketing and fintech space, Big FX understands the intricate
                connections between market psychology, technical analysis, and risk management. His goal is to
                make trading accessible and profitable for both novice and seasoned traders alike.
              </p>
            </div>
          </div>
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
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add the rest of the section (winning trades, etc.) */}

      </div>
    </section>
  );
}

