import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import { PreOrderDialog } from "./PreOrderDialog";

export function FinalCTA() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <section
      id="reserve"
      className="py-20 md:py-32 bg-gradient-to-br from-eco-primary via-eco-teal to-eco-accent relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-eco-dark rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-eco-dark rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-eco-dark/30 backdrop-blur rounded-full">
            <Sparkles className="h-4 w-4 text-eco-dark" />
            <span className="text-sm font-semibold text-eco-dark">
              Limited Time Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eco-dark">
            Join the Smart Recycling Revolution
          </h2>

          <p className="text-xl md:text-2xl text-eco-dark/80 max-w-2xl mx-auto">
            Be among the first 1,000 customers to transform your waste into
            wealth
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto py-8">
            <div className="bg-eco-dark/20 backdrop-blur rounded-xl p-6">
              <div className="text-3xl font-bold text-eco-dark mb-2">
                ₹2,999
              </div>
              <div className="text-sm text-eco-dark/80">
                One-time investment
              </div>
            </div>
            <div className="bg-eco-dark/20 backdrop-blur rounded-xl p-6">
              <div className="text-3xl font-bold text-eco-dark mb-2">
                ₹450/mo
              </div>
              <div className="text-sm text-eco-dark/80">Potential earnings</div>
            </div>
            <div className="bg-eco-dark/20 backdrop-blur rounded-xl p-6">
              <div className="text-3xl font-bold text-eco-dark mb-2">
                6 months
              </div>
              <div className="text-sm text-eco-dark/80">ROI timeline</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-eco-dark hover:bg-eco-dark/90 text-eco-accent font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group"
              onClick={() => setIsDialogOpen(true)}
              data-ocid="finalcta-reserve-btn"
            >
              Reserve Your AI Bin Today
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-sm text-eco-dark/70">
            ✓ Free shipping across India • ✓ 30-day money-back guarantee • ✓
            2-year warranty
          </p>

          {/* Contact Section */}
          <div className="pt-8 border-t border-eco-dark/20">
            <button
              type="button"
              onClick={() => setShowContact((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-eco-dark/30 hover:bg-eco-dark/50 backdrop-blur rounded-full text-eco-dark font-semibold transition-all duration-300 hover:scale-105"
              data-ocid="contact-toggle-btn"
            >
              <Phone className="h-5 w-5" />
              Contact Us
            </button>

            {showContact && (
              <div className="mt-6 inline-flex flex-col items-center gap-3 bg-eco-dark/25 backdrop-blur rounded-2xl px-10 py-6 border border-eco-dark/30 animate-fade-in-up">
                <p className="text-eco-dark/70 text-sm font-medium uppercase tracking-wider">
                  Reach us on
                </p>
                <a
                  href="tel:9999999876"
                  className="text-3xl font-bold text-eco-dark hover:text-eco-dark/80 transition-colors"
                  data-ocid="contact-phone-link"
                >
                  📞 9999999876
                </a>
                <p className="text-eco-dark/80 text-base font-medium">
                  Contact us for further enquiry — we're happy to help!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <PreOrderDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}
