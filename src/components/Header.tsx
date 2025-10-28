import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: "HOME", href: "/" },
    { 
      name: "ALL PRODUCTS", 
      href: "/products",
      submenu: [
        { name: "New Arrivals", href: "/products?filter=new" },
        { name: "Best Sellers", href: "/products?filter=bestsellers" },
        { name: "On Sale", href: "/products?filter=sale" }
      ]
    },
    { 
      name: "TRANSFORMERS", 
      href: "/categories/transformers",
      submenu: [
        { name: "Masterpiece", href: "/categories/transformers/masterpiece" },
        { name: "Studio Series", href: "/categories/transformers/studio-series" },
        { name: "Generations", href: "/categories/transformers/generations" }
      ]
    },
    { 
      name: "MECHA ROBOTS", 
      href: "/categories/mecha",
      submenu: [
        { name: "Gundam", href: "/categories/mecha/gundam" },
        { name: "Custom Builds", href: "/categories/mecha/custom" }
      ]
    },
    { 
      name: "ACTION FIGURES", 
      href: "/categories/action-figures",
      submenu: [
        { name: "Marvel", href: "/categories/action-figures/marvel" },
        { name: "DC Comics", href: "/categories/action-figures/dc" },
        { name: "Anime", href: "/categories/action-figures/anime" }
      ]
    },
    { name: "ABOUT US", href: "/about" },
    { name: "CONTACT", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[hsl(var(--header-bg))] text-white shadow-md">
      {/* Top Bar */}
      <div className="border-b border-white/10 bg-[hsl(var(--header-bg))]/95">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 text-sm">
          <p className="hidden md:block">WELCOME TO OUR TOY STORE!</p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-secondary transition-colors">
              CONTACT US
            </Link>
            <Link to="/signin" className="hover:text-secondary transition-colors flex items-center gap-1">
              <User className="h-4 w-4" />
              SIGN IN
            </Link>
            <Link to="/signup" className="hover:text-secondary transition-colors">
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <div className="leading-tight">OH MY PRIMUS</div>
              <div className="text-xl font-normal">TOY STORE</div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden flex-1 max-w-xl mx-8 lg:block">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full bg-white text-foreground pl-4 pr-10 h-11"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-11 text-muted-foreground hover:text-foreground"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative hover:text-secondary transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:block border-t border-white/10 bg-[hsl(var(--header-bg))]">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center gap-1">
            {navigation.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-4 text-sm font-medium hover:bg-[hsl(var(--nav-hover))] transition-colors"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full bg-white text-foreground shadow-lg min-w-[200px] py-2 rounded-b-md">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[hsl(var(--header-bg))] py-4">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full bg-white text-foreground"
              />
            </div>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-2 hover:bg-[hsl(var(--nav-hover))] rounded transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.href}
                            className="block px-4 py-1 text-sm text-white/80 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
