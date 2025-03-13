import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export function Hero() {
  return (
    <section className="text-center py-20 px-5">
      <motion.h2
        className="text-4xl font-bold mb-4"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
      >
        Supercharge Your Productivity with AI
      </motion.h2>
      <p className="text-lg mb-6">
        Smart reminders, automated tasks, and AI-driven insights.
      </p>
      <Button size="lg">Get Started for Free</Button>
    </section>
  );
}
