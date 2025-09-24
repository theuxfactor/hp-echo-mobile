import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      title: "Everyday Printing",
      price: "$6/mo",
      description: "50 pages/mo\nInk subscription for home & school.",
      features: [
        "Warranty included",
        "Secure by design", 
        "Energy efficient",
        "Fast setup"
      ]
    },
    {
      title: "Pro Laptop",
      price: "$1299",
      description: "Intel Core Ultra\nPowerful performance for multitasking.",
      features: [
        "Warranty included",
        "Secure by design",
        "Energy efficient", 
        "Fast setup"
      ],
      isPopular: true
    },
    {
      title: "Creator Workstation", 
      price: "$2599",
      description: "RTX Studio Ready\nHigh-end graphics & compute.",
      features: [
        "Warranty included",
        "Secure by design",
        "Energy efficient",
        "Fast setup"
      ]
    }
  ];

  return (
    <section id="products" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured products & subscriptions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible options for home, business, and creative workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;