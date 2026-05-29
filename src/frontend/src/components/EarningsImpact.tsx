import { useGetStats } from "@/hooks/useQueries";
import { IndianRupee, Leaf, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function EarningsImpact() {
  const { data: stats } = useGetStats();

  const metrics = [
    {
      icon: IndianRupee,
      label: "Fines Saved",
      value: stats ? Number(stats.finesSaved) : 125000,
      prefix: "₹",
      color: "text-eco-accent",
      bgColor: "bg-eco-accent/10",
    },
    {
      icon: Leaf,
      label: "Waste Recycled",
      value: stats ? Number(stats.wasteRecycled) : 45000,
      suffix: " kg",
      color: "text-eco-primary",
      bgColor: "bg-eco-primary/10",
    },
    {
      icon: TrendingUp,
      label: "Income Generated",
      value: stats ? Number(stats.incomeGenerated) : 67500,
      prefix: "₹",
      color: "text-eco-teal",
      bgColor: "bg-eco-teal/10",
    },
    {
      icon: Users,
      label: "Happy Users",
      value: stats ? Number(stats.users) : 150,
      suffix: "+",
      color: "text-eco-accent",
      bgColor: "bg-eco-accent/10",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-eco-darker to-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/assets/generated/counter-bg.dim_800x400.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-eco-darker via-eco-darker/90 to-background" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Real <span className="text-eco-accent">Earnings</span>, Real{" "}
            <span className="text-eco-primary">Impact</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Join thousands of users already making money while saving the planet
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-6 hover:border-eco-teal/50 transition-all duration-300 hover:scale-105 group"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${metric.bgColor} mb-4 group-hover:scale-110 transition-transform`}
              >
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <div
                className={`text-3xl md:text-4xl font-bold mb-2 ${metric.color}`}
              >
                <AnimatedCounter
                  end={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Earnings breakdown */}
        <div className="max-w-4xl mx-auto bg-card/30 backdrop-blur border border-border/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Your Monthly Earning Potential
          </h3>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl">
              <div>
                <div className="font-semibold">Clean Recyclables</div>
                <div className="text-sm text-muted-foreground">
                  Paper, plastic, metal @ ₹13-15/kg
                </div>
              </div>
              <div className="text-2xl font-bold text-eco-teal">₹300</div>
            </div>

            <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl">
              <div>
                <div className="font-semibold">Compost Pellets</div>
                <div className="text-sm text-muted-foreground">
                  Organic waste converted to fertilizer
                </div>
              </div>
              <div className="text-2xl font-bold text-eco-primary">₹150</div>
            </div>

            <div className="border-t border-border/50 pt-6">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold">Total Monthly Income</div>
                <div className="text-3xl font-bold text-eco-accent">₹450</div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Plus avoid ₹5,000 in potential RWA fines
              </p>
            </div>
          </div>
        </div>

        {/* Environmental impact */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="inline-block px-6 py-3 bg-eco-primary/20 border border-eco-primary/30 rounded-full mb-4">
            <span className="text-eco-primary font-semibold">
              🌍 Environmental Impact
            </span>
          </div>
          <p className="text-lg text-muted-foreground">
            Every bin diverts{" "}
            <span className="text-eco-primary font-semibold">
              2-3 kg of waste daily
            </span>{" "}
            from landfills, reducing methane emissions and contributing to a
            cleaner India.
          </p>
        </div>
      </div>
    </section>
  );
}
