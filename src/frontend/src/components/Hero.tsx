import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { PreOrderDialog } from "./PreOrderDialog";

export function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-eco-dark via-background to-eco-darker">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-eco-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-eco-teal/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-eco-accent/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Hero content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-eco-accent/20 text-eco-accent rounded-full text-sm font-semibold border border-eco-accent/30 animate-fade-in">
                Revolutionary Smart Waste Solution
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              Turn Your Trash into{" "}
              <span className="text-eco-accent">Income</span> — Powered by{" "}
              <span className="text-eco-teal">AI</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up delay-200">
              A <span className="text-eco-accent font-semibold">₹2,999</span>{" "}
              smart bin that automatically sorts waste, eliminates apartment
              fines, and helps you earn up to{" "}
              <span className="text-eco-teal font-semibold">₹450/month</span>{" "}
              from clean recyclables — all without lifting a finger.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <Button
                size="lg"
                className="bg-eco-accent hover:bg-eco-accent/90 text-eco-dark font-bold text-lg px-8 py-6 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
                onClick={() => setIsDialogOpen(true)}
                data-ocid="hero-preorder-cta"
              >
                Pre-Order Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-eco-teal text-eco-teal hover:bg-eco-teal/10 font-semibold text-lg px-8 py-6 rounded-full group"
                onClick={scrollToHowItWorks}
                data-ocid="hero-how-it-works-cta"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                See How It Works
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-accent">₹2,999</div>
                <div className="text-sm text-muted-foreground">
                  One-time cost
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-teal">₹450/mo</div>
                <div className="text-sm text-muted-foreground">
                  Potential earnings
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-primary">
                  ₹5,000
                </div>
                <div className="text-sm text-muted-foreground">Fines saved</div>
              </div>
            </div>
          </div>

          {/* Right content - Product image */}
          <div className="relative animate-fade-in-up delay-500">
            <div className="relative z-10">
              <img
                src="/assets/generated/smart-home-hero.dim_1200x800.png"
                alt="AI Waste Alchemist Bin in modern apartment"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-eco-accent text-eco-dark px-6 py-3 rounded-full font-bold shadow-lg animate-bounce-slow">
                AI Powered
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-eco-teal/30 blur-3xl -z-10 animate-pulse" />
          </div>
        </div>
      </div>

      <PreOrderDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  );
}
