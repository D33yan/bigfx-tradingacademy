"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Twitter, Instagram, Send, Phone, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [tickerItems, setTickerItems] = useState([
    "BTC/USD +5.2%",
    "EUR/USD +3.8%",
    "USD/JPY +0.5%",
    "VIX 75 Index +2.3%",
    "Crash 500 Index -1.2%",
    "Rise/Fall Synthetic +1.8%",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerItems(prev => {
        const newItems = [...prev];
        newItems.push(newItems.shift() as string);
        return newItems;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleVideo = () => {
    const video = document.querySelector('video');
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/tradingvidbg.mp4"
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
              <Button className="w-full md:w-auto font-bold text-lg md:text-xl px-8 py-4 md:py-6 group bg-gradient-to-r from-[#2b5ba8] to-[#1e4c8f] text-white hover:from-[#1e4c8f] hover:to-[#2b5ba8] transition-all duration-300 transform hover:scale-105 rounded-full shadow-lg hover:shadow-xl">
                Start Trading Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="w-full md:w-auto font-bold text-lg md:text-xl px-8 py-4 md:py-6 group bg-transparent text-white border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 rounded-full"
                onClick={toggleVideo}
              >
                {isVideoPlaying ? 'Pause' : 'Play'} Video
                <Play className="ml-2 w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute top-4 left-4 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {/* <Badge variant="secondary" className="text-sm md:text-base px-4 py-2 bg-gradient-to-r from-[#2b5ba8] to-[#1e4c8f] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
          New Trading Course Available
        </Badge> */}
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-0 right-0 z-20 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="flex space-x-4 animate-ticker">
          {tickerItems.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold backdrop-blur-sm whitespace-nowrap"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 z-20 flex flex-col space-y-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        {[
          { icon: <Twitter size={24} />, href: "https://twitter.com/bigfx", color: "#1DA1F2" },
          { icon: <Instagram size={24} />, href: "https://instagram.com/bigfx", color: "#E1306C" },
          { icon: <Send size={24} />, href: "https://t.me/bigfx", color: "#0088cc" },
          { icon: <Phone size={24} />, href: "https://wa.me/1234567890", color: "#25D366" },
          { icon: <Linkedin size={24} />, href: "https://linkedin.com/company/bigfx", color: "#0077B5" },
        ].map((item, index) => (
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