import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
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
    },
    {
      id: "9",
      name: "Bandai Metal Build Gundam Exia Repair IV",
      price: 289.99,
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&q=80",
      rating: 5,
      inStock: true
    },
    {
      id: "10",
      name: "Sentinel Toys Riobot VR-052T Mospeada",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=500&q=80",
      rating: 4,
      inStock: true
    },
    {
      id: "11",
      name: "Hasbro Transformers War for Cybertron Titan",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      badge: "SALE",
      rating: 5,
      inStock: true
    },
    {
      id: "12",
      name: "Good Smile Nendoroid Optimus Prime",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1563191215-b1a3e1ff09ae?w=500&q=80",
      rating: 4,
      inStock: true
    }
  ];

  const categories = [
    "Transformers",
    "Gundam",
    "Marvel",
    "DC Comics",
    "Anime Figures",
    "Model Kits"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">All Products</h1>
            <p className="text-muted-foreground">Browse our complete collection of collectible toys</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center gap-2">
                      <Checkbox id={category} />
                      <label htmlFor={category} className="text-sm cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-4">Price Range</h3>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  step={10}
                  className="mb-4"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="in-stock" />
                    <label htmlFor="in-stock" className="text-sm cursor-pointer">
                      In Stock
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="pre-order" />
                    <label htmlFor="pre-order" className="text-sm cursor-pointer">
                      Pre-Order
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products List */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{products.length}</span> products
                </p>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2">
                <Button variant="outline">Previous</Button>
                <Button variant="outline">1</Button>
                <Button variant="default">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
