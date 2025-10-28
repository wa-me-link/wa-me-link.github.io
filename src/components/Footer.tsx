import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--header-bg))] text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">OH MY PRIMUS TOY STORE</h3>
            <p className="text-white/80 text-sm mb-4">
              Your premier destination for collectible toys, action figures, and transformers. 
              We bring joy to collectors worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-white/80 hover:text-white transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-white/80 hover:text-white transition-colors">
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/categories/transformers" className="text-white/80 hover:text-white transition-colors">
                  Transformers
                </Link>
              </li>
              <li>
                <Link to="/categories/mecha" className="text-white/80 hover:text-white transition-colors">
                  Mecha Robots
                </Link>
              </li>
              <li>
                <Link to="/categories/action-figures" className="text-white/80 hover:text-white transition-colors">
                  Action Figures
                </Link>
              </li>
              <li>
                <Link to="/categories/collectibles" className="text-white/80 hover:text-white transition-colors">
                  Collectibles
                </Link>
              </li>
              <li>
                <Link to="/categories/accessories" className="text-white/80 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  123 Collector Street<br />
                  Toy District, TD 12345
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/80">support@ohmyprimus.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Oh My Primus Toy Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
