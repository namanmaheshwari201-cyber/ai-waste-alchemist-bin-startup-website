import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, TrendingUp, Trophy } from "lucide-react";

export function AppGamification() {
  const features = [
    {
      icon: Trophy,
      title: "Leaderboards",
      description: "Compete with neighbors and climb the recycling rankings",
      color: "text-eco-accent",
      bgColor: "bg-eco-accent/10",
    },
    {
      icon: Target,
      title: "Society Competitions",
      description: "Team up with your RWA to win community challenges",
      color: "text-eco-teal",
      bgColor: "bg-eco-teal/10",
    },
    {
      icon: Award,
      title: "Recycling Badges",
      description: "Unlock achievements and showcase your eco-warrior status",
      color: "text-eco-primary",
      bgColor: "bg-eco-primary/10",
    },
    {
      icon: TrendingUp,
      title: "Impact Tracker",
      description: "Visualize your carbon footprint reduction in real-time",
      color: "text-eco-accent",
      bgColor: "bg-eco-accent/10",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* App mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 max-w-md mx-auto">
              <img
                src="/assets/generated/app-mockup.dim_400x800.png"
                alt="AI Waste Alchemist App"
                className="rounded-3xl shadow-2xl"
              />
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-eco-accent text-eco-dark px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-slow">
                +50 Points!
              </div>
              <div className="absolute -bottom-6 -left-6 bg-eco-teal text-eco-dark px-4 py-2 rounded-full font-bold shadow-lg animate-bounce-slow delay-500">
                New Badge 🏆
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-eco-accent/20 to-eco-teal/20 blur-3xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-block px-4 py-2 bg-eco-teal/20 text-eco-teal rounded-full text-sm font-semibold mb-4">
                Mobile App
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Make Recycling <span className="text-eco-accent">Fun</span> &
                Competitive
              </h2>
              <p className="text-lg text-muted-foreground">
                Our gamified app turns waste management into an engaging
                experience with rewards, challenges, and community competition.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-card/50 backdrop-blur border-border/50 hover:border-eco-teal/50 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-6 space-y-3">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bgColor} group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-eco-primary/10 border border-eco-primary/30 rounded-xl p-6">
              <p className="text-eco-primary font-semibold">
                💡 Pro Tip: Top recyclers in each society win monthly prizes and
                recognition!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
