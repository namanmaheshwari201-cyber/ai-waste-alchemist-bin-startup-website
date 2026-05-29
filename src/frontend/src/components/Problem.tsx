import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, HelpCircle, Trash2, Wind } from "lucide-react";

export function Problem() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "₹5,000 Fines",
      description:
        "RWA societies impose heavy penalties for improper waste segregation",
      color: "text-destructive",
    },
    {
      icon: Trash2,
      title: "Messy Segregation",
      description:
        "Confusing rules and multiple bins make sorting a daily hassle",
      color: "text-eco-accent",
    },
    {
      icon: Wind,
      title: "Odors & Pests",
      description: "Organic waste attracts flies and creates unpleasant smells",
      color: "text-eco-teal",
    },
    {
      icon: HelpCircle,
      title: "Recycling Confusion",
      description:
        "Not knowing what can be recycled leads to wasted opportunities",
      color: "text-eco-primary",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-eco-darker to-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Urban Waste Management is{" "}
            <span className="text-destructive">Broken</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Tier 1 city residents face mounting challenges with apartment waste
            management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              className="bg-card/50 backdrop-blur border-border/50 hover:border-eco-teal/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/50 group-hover:bg-eco-teal/10 transition-colors">
                  <problem.icon className={`h-8 w-8 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-bold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual separator */}
        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-4 bg-eco-primary/10 border border-eco-primary/30 rounded-full">
            <p className="text-eco-primary font-semibold">
              But there's a smarter way...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
