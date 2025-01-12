'use client'
import {
  Twitter,
  Instagram,
  Send,
  Phone,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export const FooterSection = () => {
  const socialLinks = [
    {
      icon: <Twitter size={24} />,
      href: "https://x.com/louisemmy039?t=2Q9UH4B09BTWnbPEBEv3uw&s=09",
      color: "#1DA1F2",
    },
    {
      icon: <Instagram size={24} />,
      href: "https://instagram.com/bigfx",
      color: "#E1306C",
    },
    {
      icon: <Send size={24} />,
      href: "https://t.me/BigFx22",
      color: "#0088cc",
    },
    {
      icon: <Phone size={24} />,
      href: "https://wa.me/message/45R3MSCOVOEPA1",
      color: "#25D366",
    },
  ];

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      <div
        className="container mx-auto py-16 px-6 md:px-12 lg:px-16 animate-fadeIn"
      >
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl font-extrabold text-[#4a8eff]">
                Big FX
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering traders with cutting-edge strategies and market insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon, href, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-gray-400 hover:scale-110 transition-transform duration-200"
                  style={{ color }}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Services", "Pricing", "Contact Us"].map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                      className="text-gray-400 hover:text-[#4a8eff] hover:translate-x-1 transition-all duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold tracking-wide">Newsletter</h3>
            <p className="text-gray-400 leading-relaxed">
              Subscribe to our newsletter for the latest market insights and trading tips.
            </p>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full bg-[#4a8eff] hover:bg-[#2b5ba8] text-white transition-transform hover:scale-105 duration-200">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left text-gray-400 text-sm">
              &copy; {currentYear} Big FX. All rights reserved.
            </div>
            <div className="flex justify-center space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#4a8eff] hover:underline transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#4a8eff] hover:underline transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <Link
                href="mailto:louisemmy039@gmail.com"
                className="text-gray-400 hover:text-[#4a8eff] hover:underline transition-colors duration-200 flex items-center"
              >
                <Mail size={16} className="mr-1" /> louisemmy039@gmail.com
              </Link>
              <Link
                href="tel:+2347032291679"
                className="text-gray-400 hover:text-[#4a8eff] hover:underline transition-colors duration-200 flex items-center"
              >
                <Phone size={16} className="mr-1" /> +234 703-229-1679
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind CSS for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </footer>
  );
};
