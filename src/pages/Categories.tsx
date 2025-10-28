import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Transformers",
      description: "Autobots, Decepticons, and everything in between",
      image: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=600&q=80",
      href: "/categories/transformers",
      count: "250+ items"
    },
    {
      name: "Mecha Robots",
      description: "Gundam, Macross, and custom mecha builds",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&q=80",
      href: "/categories/mecha",
      count: "180+ items"
    },
    {
      name: "Action Figures",
      description: "Marvel, DC, Star Wars, and more",
      image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=600&q=80",
      href: "/categories/action-figures",
      count: "320+ items"
    },
    {
      name: "Model Kits",
      description: "Build your own masterpiece",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&q=80",
      href: "/categories/model-kits",
      count: "150+ items"
    },
    {
      name: "Collectibles",
      description: "Rare and limited edition pieces",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      href: "/categories/collectibles",
      count: "95+ items"
    },
    {
      name: "Accessories",
      description: "Display cases, stands, and more",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=600&q=80",
      href: "/categories/accessories",
      count: "75+ items"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Browse Categories</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our extensive collection organized by your favorite toy lines
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-2xl font-bold mb-1">{category.name}</h3>
                    <p className="text-white/90 text-sm">{category.count}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center text-secondary font-medium group-hover:gap-2 transition-all">
                    Browse Collection
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Collections */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/collections/new-arrivals" className="group">
                <div className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">New Arrivals</h3>
                  <p className="text-muted-foreground text-sm">
                    Check out the latest additions to our collection
                  </p>
                </div>
              </Link>

              <Link to="/collections/bestsellers" className="group">
                <div className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Best Sellers</h3>
                  <p className="text-muted-foreground text-sm">
                    Our most popular items among collectors
                  </p>
                </div>
              </Link>

              <Link to="/collections/limited-edition" className="group">
                <div className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💎</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Limited Edition</h3>
                  <p className="text-muted-foreground text-sm">
                    Exclusive and rare collectibles
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
