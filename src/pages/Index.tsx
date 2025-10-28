import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Truck, Shield, HeadphonesIcon } from "lucide-react";

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Transformers Masterpiece MP-44 Optimus Prime v3",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=500&q=80",
      badge: "NEW",
      rating: 5,
      inStock: true
    },
    {
      id: "2",
      name: "Studio Series 86 Grimlock Commander Class",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80",
      badge: "BESTSELLER",
      rating: 5,
      inStock: true
    },
    {
      id: "3",
      name: "ThreeA Transformers Bumblebee Premium Scale",
      price: 699.99,
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=500&q=80",
      badge: "PREMIUM",
      rating: 5,
      inStock: true
    },
    {
      id: "4",
      name: "Legacy Evolution Motormaster Leader Class",
      price: 74.99,
      image: "https://images.unsplash.com/photo-1594235386757-48cc0019f4e6?w=500&q=80",
      rating: 4,
      inStock: true
    },
    {
      id: "5",
      name: "Gundam RG 1/144 Nu Gundam Model Kit",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500&q=80",
      badge: "HOT",
      rating: 5,
      inStock: true
    },
    {
      id: "6",
      name: "Marvel Legends Spider-Man Retro Collection",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?w=500&q=80",
      rating: 4,
      inStock: true
    },
    {
      id: "7",
      name: "Hot Toys Iron Man Mark 85 1/6 Scale Figure",
      price: 425.00,
      image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=500&q=80",
      badge: "EXCLUSIVE",
      rating: 5,
      inStock: false
    },
    {
      id: "8",
      name: "Beast Kingdom DAH-080 Batman Dark Knight",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=500&q=80",
      rating: 5,
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Banners */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link to="/promo/triple-chance" className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3] md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&q=80"
                alt="Triple Chance Campaign"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Triple Chance</h3>
                  <p className="text-sm">Win Amazing Prizes!</p>
                </div>
              </div>
            </Link>

            <Link to="/categories/transformers/predaking" className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3] md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1551191177-e772d3441e6a?w=800&q=80"
                alt="Transformers Predaking"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Predaking Series</h3>
                  <p className="text-sm">Legendary Collection</p>
                </div>
              </div>
            </Link>

            <Link to="/categories/collectibles/special" className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3] md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800&q=80"
                alt="Limited Edition"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Limited Edition</h3>
                  <p className="text-sm">Exclusive Collectibles</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-white p-3 rounded-lg">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-white p-3 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Secure Payment</h3>
                  <p className="text-sm text-muted-foreground">100% secure transactions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-white p-3 rounded-lg">
                  <HeadphonesIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">Dedicated customer service</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <Star className="h-8 w-8 text-secondary fill-secondary" />
              Featured Products
            </h2>
            <Button variant="outline" asChild>
              <Link to="/products">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
            <p className="mb-6 text-white/90">Subscribe to our newsletter for exclusive deals and new arrivals</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-foreground"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
