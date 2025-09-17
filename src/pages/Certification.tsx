import Navigation from "@/components/Navigation";
import { Award, Plus, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certification = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      status: "Active",
      issueDate: "2023-08-15",
      expiryDate: "2026-08-15",
      credentialId: "AWS-SA-2023-001",
      category: "Cloud Computing"
    },
    {
      title: "React Developer Certification",
      provider: "Meta",
      status: "Active",
      issueDate: "2023-06-20",
      expiryDate: "2025-06-20",
      credentialId: "META-REACT-2023-045",
      category: "Frontend Development"
    },
    {
      title: "Scrum Master Certification",
      provider: "Scrum Alliance",
      status: "Expired",
      issueDate: "2022-03-10",
      expiryDate: "2024-03-10",
      credentialId: "CSM-2022-789",
      category: "Project Management"
    },
    {
      title: "Azure Fundamentals",
      provider: "Microsoft",
      status: "In Progress",
      issueDate: null,
      expiryDate: null,
      credentialId: null,
      category: "Cloud Computing"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-primary/10 text-primary";
      case "Expired": return "bg-destructive/10 text-destructive";
      case "In Progress": return "bg-accent/10 text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
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
              <h1 className="text-4xl font-bold mb-2">Certifications</h1>
              <p className="text-muted-foreground">Manage your professional certifications and credentials</p>
            </div>
            <Button className="bg-gradient-primary hover-lift">
              <Plus className="mr-2 h-4 w-4" />
              Add Certification
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-muted-foreground">Active</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Calendar className="h-6 w-6 text-accent-foreground" />
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
                  <div className="p-3 rounded-full bg-destructive/10">
                    <Calendar className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-sm text-muted-foreground">Expired</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <Award className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">17</p>
                    <p className="text-sm text-muted-foreground">Total</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gradient-card border-0 hover-lift transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                      <CardDescription>{cert.provider}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(cert.status)}>
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Category:</span>
                      <span>{cert.category}</span>
                    </div>
                    
                    {cert.issueDate && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Issued:</span>
                        <span>{new Date(cert.issueDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    
                    {cert.expiryDate && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Expires:</span>
                        <span>{new Date(cert.expiryDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    
                    {cert.credentialId && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">ID:</span>
                        <span className="font-mono text-xs">{cert.credentialId}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    {cert.status === "Active" && (
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
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

export default Certification;