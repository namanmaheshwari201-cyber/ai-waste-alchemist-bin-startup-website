import { Card, CardContent } from "@/components/ui/card";
import { Camera, Cpu, Leaf, Recycle } from "lucide-react";

export function Solution() {
  const features = [
    {
      icon: Camera,
      title: "AI Vision Camera",
      description:
        "Trained on Indian waste patterns to identify materials instantly",
      gradient: "from-eco-teal to-eco-primary",
    },
    {
      icon: Cpu,
      title: "Robotic Sorting Claw",
      description:
        "Automated arm sorts waste into sealed compartments with precision",
      gradient: "from-eco-accent to-eco-teal",
    },
    {
      icon: Leaf,
      title: "Odorless Composting",
      description:
        "Dehydration technology converts organic waste into clean pellets",
      gradient: "from-eco-primary to-eco-accent",
    },
    {
      icon: Recycle,
      title: "Clean Recyclables",
      description:
        "Perfectly sorted materials ready for kabadiwalas to collect",
      gradient: "from-eco-teal to-eco-primary",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-eco-teal to-transparent" />

      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the{" "}
            <span className="text-eco-accent">AI Waste Alchemist Bin</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A revolutionary smart bin that transforms waste management with
            cutting-edge technology
          </p>
        </div>

        {/* Product showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-20">
          <div className="relative order-2 lg:order-1">
            <img
              src="/assets/generated/ai-waste-bin.dim_800x600.png"
              alt="AI Waste Alchemist Bin"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-eco-primary/20 to-eco-teal/20 rounded-2xl blur-2xl -z-10" />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-eco-primary/20 text-eco-primary rounded-full text-sm font-semibold">
                Smart Technology
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Automated Waste Sorting at Your Fingertips
              </h3>
              <p className="text-lg text-muted-foreground">
                Simply drop your mixed waste into the bin. Our AI-powered system
                handles everything else — from identification to sorting to
                composting.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-eco-accent mt-2" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Zero effort required
                  </span>{" "}
                  — just drop and go
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-eco-teal mt-2" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Sealed compartments
                  </span>{" "}
                  prevent cross-contamination
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-eco-primary mt-2" />
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Compact design
                  </span>{" "}
                  fits any apartment kitchen
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="bg-card/50 backdrop-blur border-border/50 hover:border-eco-teal/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <CardContent className="p-6 space-y-4">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-7 w-7 text-eco-dark" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
