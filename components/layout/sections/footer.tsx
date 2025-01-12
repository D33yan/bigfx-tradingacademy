import { ChevronsUpDown, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const FooterSection = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <ChevronsUpDown className="w-8 h-8 text-[#4a8eff]" />
              <span className="text-2xl font-bold">Big FX</span>
            </Link>
            <p className="text-gray-400">
              Empowering traders with cutting-edge strategies and market insights.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/strategies" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                  Trading Strategies
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                  Education Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Trading</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/forex" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                  Forex
                </Link>
              </li>
              <li>
                <Link href="/stocks" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                  Stocks
                </Link>
              </li>
              <li>
                <Link href="/commodities" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                  Commodities
                </Link>
              </li>
              <li>
                <Link href="/crypto" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                  Cryptocurrencies
                </Link>
              </li>
              <li>
                <Link href="/indices" className="text-gray-400 hover:text-[#4a8eff] transition-colors">
                  Indices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest market insights and trading tips.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full bg-[#4a8eff] hover:bg-[#2b5ba8] text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              &copy; 2024 Big FX. All rights reserved.
            </div>
            <div className="flex justify-center space-x-4">
              <Link href="/privacy" className="text-gray-400 hover:text-[#4a8eff] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#4a8eff] transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
            <div className="flex justify-end space-x-4">
              <Link href="mailto:info@bigfx.com" className="text-gray-400 hover:text-[#4a8eff] transition-colors flex items-center">
                <Mail size={16} className="mr-1" /> info@bigfx.com
              </Link>
              <Link href="tel:+1234567890" className="text-gray-400 hover:text-[#4a8eff] transition-colors flex items-center">
                <Phone size={16} className="mr-1" /> +1 (234) 567-890
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}