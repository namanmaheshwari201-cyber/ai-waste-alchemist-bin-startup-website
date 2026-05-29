import { ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Drop Mixed Waste",
      description:
        "Simply toss all your waste into the bin — no sorting needed",
      image: "/assets/generated/sorting-process.dim_1000x600.png",
    },
    {
      number: "02",
      title: "AI Scans",
      description: "Camera identifies each item using trained AI vision",
      image: "/assets/generated/ai-waste-bin.dim_800x600.png",
    },
    {
      number: "03",
      title: "Robotic Arm Sorts",
      description: "Automated claw separates waste into proper compartments",
      image: "/assets/generated/sorting-process.dim_1000x600.png",
    },
    {
      number: "04",
      title: "App Tracks",
      description: "Monitor your recycling stats and environmental impact",
      image: "/assets/generated/app-mockup.dim_400x800.png",
    },
    {
      number: "05",
      title: "Get Paid",
      description: "Receive UPI/cash payments via QR code from kabadiwalas",
      image: "/assets/generated/app-mockup.dim_400x800.png",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-eco-darker relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-eco-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-eco-teal/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="text-eco-accent">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Five simple steps from trash to cash
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="inline-block">
                  <span className="text-6xl md:text-7xl font-bold text-eco-accent/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                <p className="text-lg text-muted-foreground">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="flex items-center gap-2 text-eco-teal">
                    <span className="text-sm font-semibold">Next step</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>

              <div
                className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-eco-dark/50 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-eco-accent/20 rounded-full blur-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
