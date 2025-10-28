import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
            <p className="text-muted-foreground">We'd love to hear from you. Get in touch with our team!</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visit Our Store</h3>
                    <p className="text-muted-foreground">
                      123 Collector Street<br />
                      Toy District, TD 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      Phone: +1 (555) 123-4567<br />
                      Toll Free: 1-800-TOY-STORE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      General: support@ohmyprimus.com<br />
                      Orders: orders@ohmyprimus.com<br />
                      Sales: sales@ohmyprimus.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <p className="text-muted-foreground">Map Location</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="font-bold mb-2">Do you ship internationally?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! We ship to most countries worldwide. Shipping costs and delivery times vary by location.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">What is your return policy?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer a 30-day return policy for unopened items in original condition. See our Returns page for details.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Are all products authentic?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! We only sell 100% authentic products sourced directly from official distributors.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Do you offer pre-orders?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer pre-orders for upcoming releases. Pre-order items typically ship on their release date.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
