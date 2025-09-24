import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">HP</div>
          <div className="text-sm text-muted-foreground font-medium">Store</div>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
            Products
          </a>
          <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">
            Solutions
          </a>
          <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">
            Support
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-primary">
            Sign In
          </Button>
          <Button variant="default" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
            Shop Deals
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;