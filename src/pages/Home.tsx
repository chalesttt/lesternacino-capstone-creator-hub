
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Filter, Code, Sparkles, Save } from "lucide-react";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12 md:py-24 lg:py-32 xl:py-36">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-600">
                Create Stellar <span className="gradient-text">Capstone Projects</span>
              </h1>
              <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl">
                Generate creative, relevant, and impressive capstone project titles for any field of study with our intelligent title generator.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link to="/generator">
                <Button size="lg" className="font-medium px-8 py-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all">
                  Start Creating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-4 p-4 bg-primary/5 rounded-lg text-sm text-muted-foreground">
              <p>Design and develop impressive projects that will impress your professors and future employers</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Create Your Perfect Capstone Project</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our intelligent generator helps you create the perfect project based on your preferences and needs
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
            <div className="group relative flex flex-col items-center p-8 rounded-xl bg-gradient-to-b from-card/60 to-card border shadow-md hover:shadow-lg transition-all">
              <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <Filter className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customizable Filters</h3>
              <p className="text-center text-muted-foreground">
                Select from various industries, project types, and difficulty levels to tailor results to your exact needs.
              </p>
            </div>
            
            <div className="group relative flex flex-col items-center p-8 rounded-xl bg-gradient-to-b from-card/60 to-card border shadow-md hover:shadow-lg transition-all">
              <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Technology Recommendations</h3>
              <p className="text-center text-muted-foreground">
                Get suggestions for the best programming languages and technologies to use for your specific project.
              </p>
            </div>
            
            <div className="group relative flex flex-col items-center p-8 rounded-xl bg-gradient-to-b from-card/60 to-card border shadow-md hover:shadow-lg transition-all">
              <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Creative Ideas</h3>
              <p className="text-center text-muted-foreground">
                Our algorithm creates unique, professional project titles with detailed descriptions to inspire your work.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/generator">
              <Button size="lg" className="font-medium px-8 py-6">
                Generate Your Project Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-primary/5 rounded-3xl my-8">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Capstone Project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our intelligent generator will help you develop a compelling project title that will impress your professors and stand out from the crowd.
            </p>
            <Link to="/generator">
              <Button size="lg" className="font-medium px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-md">
                Start Generating Ideas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
