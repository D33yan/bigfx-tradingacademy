import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, BookOpen, Users, Presentation, Computer, PhoneCall } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

enum ServiceTier {
  BASIC = 0,
  PREMIUM = 1,
}

interface ServiceProps {
  title: string;
  description: string;
  tier: ServiceTier;
  icon: React.ElementType;
  stats: {
    value: string;
    label: string;
  }[];
}

const serviceList: ServiceProps[] = [
  // Services data...
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge 
            variant="secondary" 
            className="bg-[#2b5ba8]/20 text-[#4a8eff] border-[#4a8eff]/20 mb-4"
          >
            TRADING SERVICES
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#2b5ba8] via-[#4a8eff] to-[#63a4ff] bg-clip-text text-transparent">
            Elevate Your Trading Journey
          </h2>
          
          <p className="md:w-2/3 mx-auto text-xl text-gray-300">
            Access professional-grade tools and expertise to enhance your trading strategy
            and maximize your potential in the markets.
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceList.map(({ title, description, tier, icon: Icon, stats }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full relative group hover:border-[#4a8eff] transition-all duration-500 hover:shadow-[0_0_30px_rgba(74,142,255,0.15)] overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4a8eff]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-[#2b5ba8] group-hover:bg-[#4a8eff] transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-white">{title}</CardTitle>
                  </div>
                  
                  <CardDescription className="text-gray-300 text-base mb-6">
                    {description}
                  </CardDescription>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
                    {stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-[#4a8eff]">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardHeader>

                {/* Premium Badge */}
                {tier === ServiceTier.PREMIUM && (
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-[#2b5ba8] to-[#4a8eff] text-white border-none px-3 py-1 text-sm font-semibold shadow-lg transition-transform transform group-hover:scale-110"
                  >
                    PREMIUM
                  </Badge>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Dots Animation */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gradient-to-r from-[#4a8eff] to-transparent rounded-full opacity-20 blur-xl"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 12 + 6}px`,
                height: `${Math.random() * 12 + 6}px`,
              }}
              animate={{
                y: [0, Math.random() * 50 - 25],
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 6 + 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button className="px-8 py-4 text-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 rounded-full">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
