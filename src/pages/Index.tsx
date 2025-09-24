import Header from "@/components/Header";
import Hero from "@/components/Hero"; 
import ProductsSection from "@/components/ProductsSection";
import PerformanceSection from "@/components/PerformanceSection";
import StatsSection from "@/components/StatsSection";
import ChatButton from "@/components/ChatButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductsSection />
      <PerformanceSection />
      <StatsSection />
      <ChatButton />
    </div>
  );
};

export default Index;
