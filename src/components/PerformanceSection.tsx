import { Shield, Leaf, Cpu, Award } from "lucide-react";

const PerformanceSection = () => {
  const features = [
    {
      icon: Shield,
      title: "HP Wolf Security built-in",
      description: "Advanced threat protection"
    },
    {
      icon: Leaf,
      title: "Sustainable materials usage", 
      description: "Environmentally conscious design"
    },
    {
      icon: Cpu,
      title: "AI performance optimization",
      description: "Intelligent resource management"
    },
    {
      icon: Award,
      title: "Commercial-grade reliability",
      description: "Built to last and perform"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Performance engineered for creators & professionals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              HP devices combine optimized thermals, intelligent performance tuning, and security features to keep you productive wherever you work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;