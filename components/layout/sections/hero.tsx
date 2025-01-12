"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Twitter,
  Instagram,
  Send,
  Phone,
  Linkedin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-16 bg-gray-300 rounded-full w-1/2 mx-auto" />
    <div className="h-8 bg-gray-300 rounded-full w-2/3 mx-auto" />
    <div className="h-12 bg-gray-300 rounded-full w-1/3 mx-auto" />
  </div>
);

export const HeroSection = ({ id }: { id: string }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [tickerItems, setTickerItems] = useState([
    "BTC/USD +5.2%",
    "EUR/USD +3.8%",
    "USD/JPY +0.5%",
    "VIX 75 Index +2.3%",
    "Crash 500 Index -1.2%",
    "Rise/Fall Synthetic +1.8%",
  ]);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerItems((prev) => {
        const newItems = [...prev];
        newItems.push(newItems.shift() as string);
        return newItems;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Lazy load video background
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
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

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gray-900 opacity-50 flex items-center justify-center">
            <SkeletonLoader />
          </div>
        )}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/tradingvidbg.mp4"
          onLoadedData={handleVideoLoad}
          style={{ opacity: videoLoaded ? 1 : 0 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"
          animate={{
            background: [
              "linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(43,91,168,0.3), rgba(0,0,0,0.8))",
              "linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(43,91,168,0.4), rgba(0,0,0,0.85))",
              "linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(43,91,168,0.3), rgba(0,0,0,0.8))",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container w-full relative z-10">
        <div className="grid place-items-center lg:max-w-screen-xl gap-12 mx-auto py-20 md:py-32">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-screen-lg mx-auto text-center">
              <motion.h1
                className="text-gray-300 text-5xl md:text-7xl lg:text-9xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I AM
                <motion.span
                  className="text-transparent font-bold px-2 bg-gradient-to-r from-[#2b5ba8] to-slate-400 bg-clip-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  BIG FX
                </motion.span>
              </motion.h1>
              <motion.p
                className="max-w-screen-md mx-auto text-2xl md:text-3xl lg:text-3xl font-bold text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Mastering Forex, Crypto, Stocks, and Synthetic Indices
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href={`#contact`}>
                <Button className="w-full md:w-auto font-bold text-lg md:text-xl px-8 py-4 md:py-6 group bg-gradient-to-r from-[#2b5ba8] to-[#1e4c8f] text-white hover:from-[#1e4c8f] hover:to-[#2b5ba8] transition-all duration-300 transform hover:scale-105 rounded-full shadow-lg hover:shadow-xl">
                  Start Trading Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full md:w-auto font-bold text-lg md:text-xl px-8 py-4 md:py-6 group bg-transparent text-white border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 rounded-full"
                onClick={toggleVideo}
              >
                {isVideoPlaying ? "Pause" : "Play"} Video
                <Play className="ml-2 w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-20 left-0 right-0 z-20 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.div
          className="flex space-x-4"
          animate={{ x: [0, -100] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {tickerItems.concat(tickerItems).map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold backdrop-blur-sm whitespace-nowrap"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 z-20 flex flex-col space-y-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        {[{ icon: <Twitter size={24} />, href: "https://x.com/louisemmy039?t=2Q9UH4B09BTWnbPEBEv3uw&s=09", color: "#1DA1F2" },
          { icon: <Instagram size={24} />, href: "https://instagram.com/bigfx", color: "#E1306C" },
          { icon: <Send size={24} />, href: "https://t.me/BigFx22", color: "#0088cc" },
          { icon: <Phone size={24} />, href: "https://wa.me/message/45R3MSCOVOEPA1", color: "#25D366" },
          { icon: <Linkedin size={24} />, href: "https://www.tiktok.com/@big_fxxx?_t=ZM-8skHniMl7eI&_r=1", color: "#0077B5" }]
          .map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 text-white rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
              style={{ backgroundColor: `${item.color}33` }}
              whileHover={{ scale: 1.1, backgroundColor: item.color }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {item.icon}
              </motion.div>
            </motion.a>
          ))}
      </motion.div>
    </section>
  );
};
