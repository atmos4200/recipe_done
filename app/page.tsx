import { AppShell } from "@/components/AppShell";
import { FeatureGrid } from "@/components/FeatureGrid";
import { FormsSection } from "@/components/FormsSection";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <AppShell>
      <Hero />
      <FeatureGrid />
      <FormsSection />
    </AppShell>
  );
}
