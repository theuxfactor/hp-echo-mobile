const StatsSection = () => {
  const stats = [
    {
      value: "15h",
      label: "Avg Battery Life*",
      description: "All-day productivity"
    },
    {
      value: "4K",
      label: "Display Ready", 
      description: "Crystal clear visuals"
    },
    {
      value: "Wi-Fi 7",
      label: "Next-Gen Wireless",
      description: "Ultra-fast connectivity"
    },
    {
      value: "24/7",
      label: "Premium Support",
      description: "Always here to help"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;