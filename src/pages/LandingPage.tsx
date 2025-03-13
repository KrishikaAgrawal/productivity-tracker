import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FeatureCard } from "@/components/FeatureCard";

const LandingPage = () => {
  const features = [
    {
      title: "Automated Tasks",
      description: "Let AI manage and prioritize your tasks.",
      icon: "📝",
    },
    {
      title: "Smart Reminders",
      description: "Never miss an important task again.",
      icon: "⏰",
    },
    {
      title: "Productivity Insights",
      description: "Get analytics on your work patterns.",
      icon: "📊",
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />

      <section className="grid md:grid-cols-3 gap-6 px-10 py-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </section>

      <Testimonials />

      <section className="text-center py-10 px-5">
        <h2 className="text-2xl font-bold">
          Start Boosting Your Productivity Today
        </h2>
        <Input placeholder="Enter your email" className="my-5" />
        <Button size="lg">Sign Up Now</Button>
      </section>

      <footer className="text-center py-5 border-t mt-10">
        &copy; 2025 AI Productivity. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
