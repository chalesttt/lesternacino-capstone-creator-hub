import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Copy, RefreshCw, Save, ChevronRight } from "lucide-react";
import { generateTitles, type ProjectSuggestion } from "@/utils/titleGenerator";
import { industriesData } from "@/data/industries";
import { projectTypesData } from "@/data/projectTypes";
import { difficultiesData } from "@/data/difficulties";
import { Badge } from "@/components/ui/badge";

const Generator = () => {
  const { toast } = useToast();
  const [industry, setIndustry] = useState("all");
  const [projectType, setProjectType] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [generatedTitles, setGeneratedTitles] = useState<ProjectSuggestion[]>([]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<ProjectSuggestion[]>(() => {
    const saved = localStorage.getItem("capstone-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      const titles = generateTitles(industry, projectType, difficulty, 10);
      setGeneratedTitles(titles);
      setCurrentTitleIndex(0);
      setLoading(false);
    }, 600);
  };

  const handleCopy = (title: string) => {
    navigator.clipboard.writeText(title);
    toast({
      title: "Copied to clipboard",
      description: "The project title has been copied to your clipboard",
    });
  };

  const toggleFavorite = (projectSuggestion: ProjectSuggestion) => {
    let newFavorites;
    const isFavorite = favorites.some((fav) => fav.title === projectSuggestion.title);
    
    if (isFavorite) {
      newFavorites = favorites.filter((fav) => fav.title !== projectSuggestion.title);
      toast({
        title: "Removed from favorites",
        description: "The project title has been removed from your favorites",
      });
    } else {
      newFavorites = [...favorites, projectSuggestion];
      toast({
        title: "Added to favorites",
        description: "The project title has been saved to your favorites",
      });
    }
    setFavorites(newFavorites);
    localStorage.setItem("capstone-favorites", JSON.stringify(newFavorites));
  };

  const handleNextTitle = () => {
    if (currentTitleIndex < generatedTitles.length - 1) {
      setCurrentTitleIndex(prevIndex => prevIndex + 1);
    } else {
      handleGenerate();
    }
  };

  const handlePreviousTitle = () => {
    if (currentTitleIndex > 0) {
      setCurrentTitleIndex(prevIndex => prevIndex - 1);
    }
  };

  const currentTitle = generatedTitles[currentTitleIndex];
  const isFavorite = currentTitle && favorites.some(fav => fav.title === currentTitle.title);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-10">
        <h1 className="text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Generate Your Capstone Project Title</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Select your preferences below and generate unique project titles
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Generator Controls */}
        <div>
          <Card className="border-gradient overflow-hidden shadow-lg h-full">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle>Project Title Generator</CardTitle>
              <CardDescription>Configure your preferences to generate titles</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Industry</label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industriesData.map((ind) => (
                          <SelectItem key={ind.value} value={ind.value}>
                            {ind.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Project Type</label>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypesData.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Difficulty</label>
                    <Select value={difficulty} onValueChange={setDifficulty}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        {difficultiesData.map((diff) => (
                          <SelectItem key={diff.value} value={diff.value}>
                            {diff.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button 
                  onClick={handleGenerate} 
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all"
                >
                  {loading ? (
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    "Generate Titles"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Generated Titles */}
        <div>
          {generatedTitles.length > 0 ? (
            <Card className="animate-fade-in shadow-lg border-gradient overflow-hidden h-full">
              <CardHeader className="bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                <CardTitle>Generated Title</CardTitle>
                <CardDescription>
                  Project idea {currentTitleIndex + 1} of {generatedTitles.length}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="p-6 rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <h3 className="text-xl font-bold text-primary">{currentTitle?.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => toggleFavorite(currentTitle)}
                          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                        >
                          <Save 
                            className={`h-4 w-4 ${isFavorite ? "fill-primary text-primary" : ""}`} 
                          />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleCopy(currentTitle?.title)}
                          className="flex items-center gap-1"
                        >
                          <Copy className="h-3.5 w-3.5 mr-1" />
                          Copy
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Project Description</h4>
                        <p className="text-muted-foreground">{currentTitle?.definition}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Recommended Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentTitle?.languages.map((lang, index) => (
                            <Badge key={index} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2 pb-4">
                <Button 
                  variant="outline" 
                  onClick={handlePreviousTitle} 
                  disabled={currentTitleIndex === 0}
                  className="gap-1"
                >
                  Previous
                </Button>
                
                <Button 
                  variant="default" 
                  onClick={handleNextTitle}
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 gap-1"
                >
                  Next Suggestion
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="py-16 text-center">
                <div className="text-muted-foreground">
                  <p className="text-lg">No titles generated yet</p>
                  <p className="text-sm mt-2">Configure your preferences and click "Generate Titles"</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {favorites.length > 0 && (
        <Card className="mt-8 animate-fade-in shadow-lg">
          <CardHeader className="bg-gradient-to-r from-accent/10 to-purple-600/10">
            <CardTitle>Your Favorites</CardTitle>
            <CardDescription>Your saved project titles</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {favorites.map((item, index) => (
                <li key={index} className="p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{item.title}</h4>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => toggleFavorite(item)}
                          aria-label="Remove from favorites"
                        >
                          <Save className="h-4 w-4 fill-primary text-primary" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleCopy(item.title)}
                          aria-label="Copy to clipboard"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.definition}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.languages.map((lang, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Generator;