import Navigation from "@/components/Navigation";
import { GraduationCap, Plus, Clock, CheckCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Training = () => {
  const trainings = [
    {
      title: "Advanced React Patterns",
      instructor: "Tech Academy",
      status: "In Progress",
      progress: 65,
      duration: "40 hours",
      startDate: "2024-01-15",
      category: "Frontend Development",
      level: "Advanced"
    },
    {
      title: "AWS Cloud Architecture",
      instructor: "AWS Training",
      status: "Completed",
      progress: 100,
      duration: "60 hours",
      startDate: "2023-11-01",
      category: "Cloud Computing",
      level: "Intermediate"
    },
    {
      title: "Microservices with Spring Boot",
      instructor: "Spring Academy",
      status: "Not Started",
      progress: 0,
      duration: "35 hours",
      startDate: "2024-02-01",
      category: "Backend Development",
      level: "Intermediate"
    },
    {
      title: "DevOps Fundamentals",
      instructor: "DevOps Institute",
      status: "In Progress",
      progress: 30,
      duration: "50 hours",
      startDate: "2024-01-20",
      category: "DevOps",
      level: "Beginner"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-primary/10 text-primary";
      case "In Progress": return "bg-accent/10 text-accent-foreground";
      case "Not Started": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-secondary/20 text-secondary-foreground";
      case "Intermediate": return "bg-accent/20 text-accent-foreground";
      case "Advanced": return "bg-primary/20 text-primary";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return <CheckCircle className="h-4 w-4" />;
      case "In Progress": return <PlayCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Training</h1>
              <p className="text-muted-foreground">Track your learning progress and skill development</p>
            </div>
            <Button className="bg-gradient-primary hover-lift">
              <Plus className="mr-2 h-4 w-4" />
              Enroll in Training
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <PlayCircle className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-sm text-muted-foreground">In Progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-muted">
                    <Clock className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-sm text-muted-foreground">Pending</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <GraduationCap className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">185</p>
                    <p className="text-sm text-muted-foreground">Hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Training Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainings.map((training, index) => (
              <Card key={index} className="bg-gradient-card border-0 hover-lift transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{training.title}</CardTitle>
                      <CardDescription>{training.instructor}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(training.status)}>
                        {getStatusIcon(training.status)}
                        <span className="ml-1">{training.status}</span>
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Category:</span>
                      <span>{training.category}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>{training.duration}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Level:</span>
                      <Badge className={getLevelColor(training.level)} variant="outline">
                        {training.level}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Started:</span>
                      <span>{new Date(training.startDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  {training.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress:</span>
                        <span>{training.progress}%</span>
                      </div>
                      <Progress value={training.progress} className="h-2" />
                    </div>
                  )}
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      {training.status === "Not Started" ? "Start Training" : "Continue"}
                    </Button>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Training;