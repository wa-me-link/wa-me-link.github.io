import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About Oh My Primus</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your trusted destination for premium collectible toys and action figures since 2010
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg">
              <p className="text-muted-foreground mb-4">
                Oh My Primus Toy Store was founded with a simple mission: to bring joy to collectors 
                and enthusiasts around the world by offering the finest selection of collectible toys, 
                action figures, and transformers.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small hobby shop has grown into a premier destination for collectors 
                worldwide. We pride ourselves on curating an exceptional selection of products, from 
                the latest releases to rare vintage pieces that complete your collection.
              </p>
              <p className="text-muted-foreground">
                Our team consists of passionate collectors who understand the thrill of finding that 
                perfect piece. We're committed to providing authentic products, competitive prices, 
                and exceptional customer service that keeps our community coming back.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Authenticity Guaranteed</h3>
                <p className="text-muted-foreground">
                  All products are 100% authentic and sourced directly from official distributors
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Expert Team</h3>
                <p className="text-muted-foreground">
                  Our staff are passionate collectors with deep knowledge of the products we sell
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Worldwide Shipping</h3>
                <p className="text-muted-foreground">
                  We ship globally with secure packaging to ensure your items arrive safely
                </p>
              </div>

              <div className="text-center">
                <div className="bg-secondary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Community Driven</h3>
                <p className="text-muted-foreground">
                  We're more than a store - we're a community of collectors supporting each other
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">John Smith</h3>
              <p className="text-muted-foreground text-sm mb-2">Founder & CEO</p>
              <p className="text-sm">Transformers collector for 20+ years</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Sarah Johnson</h3>
              <p className="text-muted-foreground text-sm mb-2">Head of Operations</p>
              <p className="text-sm">Anime figure specialist</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg">Mike Chen</h3>
              <p className="text-muted-foreground text-sm mb-2">Product Curator</p>
              <p className="text-sm">Gundam and mecha expert</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
