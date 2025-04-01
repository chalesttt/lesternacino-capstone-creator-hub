
// Enhanced title generator with industries, project types, difficulties, definitions, and suggested languages

// Type definitions for project suggestions
export type ProjectSuggestion = {
  title: string;
  definition: string;
  languages: string[];
};

export function generateTitles(
  category: string,
  industry: string = "all", 
  projectType: string = "all",
  difficulty: string = "all",
  count: number = 5
): ProjectSuggestion[] {
  const suggestions: ProjectSuggestion[] = [];
  
  const prefixes = {
    "computer-science": [
      "Developing a", "Implementing", "Designing", "A Framework for", 
      "Optimizing", "An Approach to", "Analyzing", "Enhancing"
    ],
    "business": [
      "Strategies for", "Analyzing", "Optimizing", "A Study on", 
      "Implementing", "Developing", "Evaluating", "Transforming"
    ],
    "engineering": [
      "Design and Implementation of", "Development of", "Optimization of",
      "Analysis and Improvement of", "A Novel Approach to", "Innovative", "Sustainable"
    ],
    "healthcare": [
      "Improving", "Assessing", "Developing", "Implementing", 
      "Evaluating", "A Study on", "Innovative Approaches to", "Patient-Centered"
    ],
    "education": [
      "Enhancing", "Developing", "Evaluating", "Implementing", 
      "A Framework for", "Strategies for", "Improving", "Assessing"
    ],
    "psychology": [
      "Understanding", "Exploring", "Analyzing", "The Impact of", 
      "A Study on", "Investigating", "The Relationship Between", "Assessment of"
    ],
    "arts": [
      "Exploring", "Creating", "Developing", "Analyzing", 
      "A Study of", "Innovative Approaches to", "The Evolution of", "Redefining"
    ],
    "science": [
      "Investigation of", "Analysis of", "Development of", "Characterization of", 
      "A Novel Approach to", "Optimization of", "Studies on", "Exploring"
    ]
  };
  
  // Industry-specific subjects
  const industrySubjects = {
    "healthcare": [
      "Patient Monitoring System", "Medical Records Management", "Telehealth Platform",
      "Health Analytics Dashboard", "Medical Diagnosis Assistant", "Medication Management",
      "Hospital Resource Optimizer", "Remote Patient Monitoring", "Healthcare Scheduling"
    ],
    "education": [
      "Learning Management System", "Student Performance Tracker", "Virtual Classroom",
      "Educational Content Delivery", "Student Engagement Platform", "Peer Learning Network",
      "Automated Grading System", "Educational Game", "Skill Assessment Tool"
    ],
    "agriculture": [
      "Crop Monitoring System", "Farm Management Platform", "Precision Agriculture Tool",
      "Livestock Tracking System", "Irrigation Optimization", "Supply Chain Management",
      "Weather Prediction for Farming", "Soil Analysis Tool", "Harvest Planning System"
    ],
    "finance": [
      "Investment Portfolio Manager", "Financial Risk Assessment", "Budget Optimization",
      "Fraud Detection System", "Banking Transaction Analyzer", "Cryptocurrency Trading Platform",
      "Personal Finance Tracker", "Insurance Claims Processor", "Financial Forecasting Tool"
    ],
    "retail": [
      "Inventory Management System", "Customer Relationship Management", "Sales Forecasting",
      "Omnichannel Commerce Platform", "Dynamic Pricing Engine", "Loyalty Program Manager",
      "Visual Merchandising Tool", "Retail Analytics Dashboard", "Smart Store Management"
    ],
    "manufacturing": [
      "Production Line Optimization", "Quality Control System", "Supply Chain Visibility",
      "Predictive Maintenance Tool", "Inventory Forecasting", "Worker Safety Monitoring",
      "Manufacturing Process Simulator", "Equipment Efficiency Tracker", "Assembly Line Optimizer"
    ],
    "transportation": [
      "Route Optimization System", "Fleet Management Platform", "Traffic Prediction Tool",
      "Logistics Coordination System", "Delivery Tracking Platform", "Public Transit Planner",
      "Vehicle Maintenance Scheduler", "Ride-sharing Service", "Smart Parking Solution"
    ],
    "energy": [
      "Energy Consumption Analyzer", "Smart Grid Management", "Renewable Energy Optimizer",
      "Power Distribution Monitor", "Energy Efficiency Tracker", "Carbon Footprint Calculator",
      "Building Energy Management", "Solar Panel Performance Monitor", "Smart Meter Data Analyzer"
    ],
    "entertainment": [
      "Content Recommendation Engine", "Media Streaming Platform", "Event Planning System",
      "Interactive Gaming Experience", "Virtual Reality Environment", "Ticket Management System",
      "Content Creation Tool", "Audience Engagement Platform", "Digital Rights Management"
    ],
    "government": [
      "Citizen Services Portal", "Public Records Management", "Emergency Response System",
      "Urban Planning Tool", "Voting Platform", "Government Resource Allocation",
      "Public Feedback System", "Policy Impact Analyzer", "Regulatory Compliance Monitor"
    ]
  };
  
  // Project type modifiers
  const projectTypeModifiers = {
    "mobile-app": [
      "Mobile Application", "Cross-platform App", "Native App",
      "Mobile Interface", "Smartphone Solution", "Tablet-optimized App"
    ],
    "web-app": [
      "Web Application", "Web Platform", "Browser-based System",
      "Web Interface", "Online Portal", "Progressive Web App"
    ],
    "desktop-app": [
      "Desktop Application", "Computer Software", "Standalone System",
      "Desktop Interface", "PC-based Tool", "Workstation Software"
    ],
    "iot-app": [
      "IoT Solution", "Connected Device System", "Smart Device Network",
      "IoT Platform", "Sensor-based Application", "Smart Environment"
    ],
    "ai-app": [
      "AI-powered Solution", "Machine Learning System", "Intelligent Assistant",
      "Predictive Model", "Neural Network Application", "Cognitive Computing Tool"
    ],
    "data-app": [
      "Data Analytics Platform", "Big Data Solution", "Data Visualization Tool",
      "Data Processing System", "Business Intelligence Dashboard", "Data Mining Application"
    ]
  };
  
  // Difficulty modifiers
  const difficultyContexts = {
    "beginner": [
      "for Beginners", "with Simple Implementation", "Using Basic Technologies",
      "with Straightforward Design", "for Novice Developers", "with Minimal Complexity"
    ],
    "intermediate": [
      "with Moderate Complexity", "Using Intermediate Technologies", "with Multiple Features",
      "for Experienced Developers", "with Enhanced Functionality", "Using Advanced Architecture"
    ],
    "advanced": [
      "with Complex Architecture", "Using Cutting-edge Technologies", "with Sophisticated Algorithms",
      "for Expert Developers", "with Advanced Integration", "Using Specialized Techniques"
    ]
  };
  
  // Programming languages recommendations based on project types
  const recommendedLanguages = {
    "mobile-app": [
      ["React Native", "JavaScript", "TypeScript"], 
      ["Flutter", "Dart"], 
      ["Swift", "Objective-C"], 
      ["Kotlin", "Java"], 
      ["Xamarin", "C#"]
    ],
    "web-app": [
      ["JavaScript", "React", "Node.js"], 
      ["TypeScript", "Angular", "Express.js"], 
      ["Python", "Django", "Flask"], 
      ["PHP", "Laravel"], 
      ["Ruby", "Ruby on Rails"]
    ],
    "desktop-app": [
      ["C#", ".NET"], 
      ["Java", "JavaFX"], 
      ["Python", "PyQt", "Tkinter"], 
      ["C++", "Qt"], 
      ["Electron", "JavaScript"]
    ],
    "iot-app": [
      ["Python", "C"], 
      ["C++", "Arduino"], 
      ["JavaScript", "Node.js"], 
      ["Java"], 
      ["Go"]
    ],
    "ai-app": [
      ["Python", "TensorFlow", "PyTorch"], 
      ["R"], 
      ["Java", "Deeplearning4j"], 
      ["JavaScript", "TensorFlow.js"], 
      ["Julia"]
    ],
    "data-app": [
      ["Python", "Pandas", "NumPy"], 
      ["R", "Shiny"], 
      ["Java", "Spark"], 
      ["JavaScript", "D3.js"], 
      ["SQL", "Power BI", "Tableau"]
    ]
  };
  
  // Definitions for different project types
  const definitions = {
    "mobile-app": [
      "A mobile application designed to provide users with a portable solution accessible from smartphones and tablets.",
      "A native application optimized for mobile devices that offers intuitive user experience and offline capabilities.",
      "A cross-platform mobile solution that works seamlessly across iOS and Android devices with responsive interface."
    ],
    "web-app": [
      "A browser-based application accessible from any device with internet connection, offering platform independence.",
      "A responsive web platform that provides users with access to services and features through standard web browsers.",
      "An online system that leverages web technologies to deliver functionality without requiring installation."
    ],
    "desktop-app": [
      "A standalone software application designed to run on desktop operating systems with full system access capabilities.",
      "A robust desktop solution optimized for performance with native integrations to the operating system.",
      "A computer-based application providing comprehensive features that leverage local processing power."
    ],
    "iot-app": [
      "A system connecting physical devices to the internet, enabling data collection, monitoring, and remote control.",
      "A network of smart devices that communicate with each other and with central systems to automate processes.",
      "An application leveraging internet-connected sensors and actuators to enable smart environments and operations."
    ],
    "ai-app": [
      "An intelligent application using machine learning algorithms to analyze data and make predictions or decisions.",
      "A solution powered by artificial intelligence to automate complex tasks and provide intelligent insights.",
      "A system employing neural networks and deep learning to understand patterns and optimize processes."
    ],
    "data-app": [
      "A platform for collecting, processing, analyzing, and visualizing large datasets to extract actionable insights.",
      "A business intelligence solution that transforms raw data into meaningful information through analytics and reporting.",
      "A comprehensive data management system that enables data-driven decision making through advanced analytics."
    ]
  };
  
  // Fallback to computer science if the category doesn't exist
  const selectedCategory = category in prefixes ? category : "computer-science";
  
  // Generate unique titles
  for (let i = 0; i < count; i++) {
    const prefix = prefixes[selectedCategory][Math.floor(Math.random() * prefixes[selectedCategory].length)];
    
    // Select subject based on industry if specified, otherwise use general
    let subject = "";
    if (industry !== "all" && industry in industrySubjects) {
      subject = industrySubjects[industry][Math.floor(Math.random() * industrySubjects[industry].length)];
    } else {
      // If all industries or industry not found, select a random industry
      const industries = Object.keys(industrySubjects);
      const randomIndustry = industries[Math.floor(Math.random() * industries.length)];
      subject = industrySubjects[randomIndustry][Math.floor(Math.random() * industrySubjects[randomIndustry].length)];
    }
    
    // Add project type modifier if specified
    let projectModifier = "";
    if (projectType !== "all" && projectType in projectTypeModifiers) {
      projectModifier = projectTypeModifiers[projectType][Math.floor(Math.random() * projectTypeModifiers[projectType].length)];
    } else {
      // If all project types or project type not found, select a random type
      const projectTypes = Object.keys(projectTypeModifiers);
      const randomType = projectTypes[Math.floor(Math.random() * projectTypes.length)];
      projectModifier = projectTypeModifiers[randomType][Math.floor(Math.random() * projectTypeModifiers[randomType].length)];
    }
    
    // Add difficulty context if specified
    let difficultyModifier = "";
    if (difficulty !== "all" && difficulty in difficultyContexts) {
      difficultyModifier = difficultyContexts[difficulty][Math.floor(Math.random() * difficultyContexts[difficulty].length)];
    }
    
    // Construct the title
    let title = `${prefix} ${subject} ${projectModifier}`;
    if (difficultyModifier) {
      title += ` ${difficultyModifier}`;
    }
    
    // Determine the actual project type for language recommendations
    let effectiveProjectType = projectType;
    if (projectType === "all") {
      const projectTypes = Object.keys(projectTypeModifiers);
      effectiveProjectType = projectTypes[Math.floor(Math.random() * projectTypes.length)];
    }
    
    // Generate definition based on the effective project type
    const definitionsList = definitions[effectiveProjectType] || definitions["web-app"]; // Fallback to web-app
    const definition = definitionsList[Math.floor(Math.random() * definitionsList.length)];
    
    // Select recommended languages based on the effective project type
    const languagesList = recommendedLanguages[effectiveProjectType] || recommendedLanguages["web-app"]; // Fallback to web-app
    const languages = languagesList[Math.floor(Math.random() * languagesList.length)];
    
    suggestions.push({
      title,
      definition,
      languages
    });
  }
  
  return suggestions;
}
