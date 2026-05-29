import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export function Differentiation() {
  const comparison = [
    { feature: "Price", ours: "₹2,999", theirs: "₹40,000" },
    { feature: "Home Use", ours: true, theirs: false },
    { feature: "AI Sorting", ours: true, theirs: true },
    { feature: "Compact Design", ours: true, theirs: false },
    { feature: "Earn Money", ours: true, theirs: false },
    { feature: "Mobile App", ours: true, theirs: false },
    { feature: "Gamification", ours: true, theirs: false },
    { feature: "Easy Installation", ours: true, theirs: false },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-eco-darker relative overflow-hidden">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why We're <span className="text-eco-accent">Different</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Premium technology at an affordable price — designed for Indian
            homes
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Comparison image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/generated/comparison-chart.dim_800x500.png"
              alt="Comparison chart"
              className="w-full h-auto"
            />
          </div>

          {/* Comparison table */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature column */}
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-center">Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparison.map((item) => (
                  <div key={item.feature} className="py-3 font-medium">
                    {item.feature}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Our product */}
            <Card className="bg-gradient-to-br from-eco-accent/20 to-eco-teal/20 backdrop-blur border-eco-accent/50 shadow-glow">
              <CardHeader>
                <CardTitle className="text-center text-eco-accent">
                  AI Waste Alchemist
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparison.map((item) => (
                  <div
                    key={item.feature}
                    className="py-3 flex items-center justify-center"
                  >
                    {typeof item.ours === "boolean" ? (
                      item.ours ? (
                        <Check className="h-6 w-6 text-eco-accent" />
                      ) : (
                        <X className="h-6 w-6 text-muted-foreground" />
                      )
                    ) : (
                      <span className="font-bold text-eco-accent">
                        {item.ours}
                      </span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Competitor */}
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-center text-muted-foreground">
                  Public AI Bins
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comparison.map((item) => (
                  <div
                    key={item.feature}
                    className="py-3 flex items-center justify-center"
                  >
                    {typeof item.theirs === "boolean" ? (
                      item.theirs ? (
                        <Check className="h-6 w-6 text-eco-primary" />
                      ) : (
                        <X className="h-6 w-6 text-muted-foreground" />
                      )
                    ) : (
                      <span className="font-medium text-muted-foreground">
                        {item.theirs}
                      </span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Key differentiator */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-eco-accent/20 border border-eco-accent/30 rounded-2xl p-8 max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-eco-accent">93% more affordable</span>{" "}
                than commercial alternatives
              </h3>
              <p className="text-lg text-muted-foreground">
                We believe smart waste management should be accessible to every
                Indian household, not just public spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
