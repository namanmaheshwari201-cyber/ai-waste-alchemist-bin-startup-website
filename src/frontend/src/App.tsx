import { Toaster } from "@/components/ui/sonner";
import { InternetIdentityProvider } from "@caffeineai/core-infrastructure";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { AppGamification } from "./components/AppGamification";
import { Differentiation } from "./components/Differentiation";
import { EarningsImpact } from "./components/EarningsImpact";
import { FinalCTA } from "./components/FinalCTA";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="overflow-x-hidden scroll-smooth">
            <Hero />
            <Problem />
            <Solution />
            <HowItWorks />
            <EarningsImpact />
            <AppGamification />
            <Differentiation />
            <FinalCTA />
          </div>
          <Toaster />
        </ThemeProvider>
      </InternetIdentityProvider>
    </QueryClientProvider>
  );
}
