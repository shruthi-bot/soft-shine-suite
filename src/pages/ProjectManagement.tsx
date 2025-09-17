import Navigation from "@/components/Navigation";
import { Users, UserPlus, UserMinus, ArrowRightLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ProjectManagement = () => {
  const [rollOnSearch, setRollOnSearch] = useState("");
  const [rollOffSearch, setRollOffSearch] = useState("");
  const rollOnData = [
    {
      employeeName: "Alice Johnson",
      employeeId: "TCS12345",
      project: "Project Alpha",
      startDate: "2024-02-01",
      role: "Senior Developer",
      skill: "React, Node.js",
      status: "Confirmed"
    },
    {
      employeeName: "Bob Smith",
      employeeId: "TCS12346",
      project: "Project Beta",
      startDate: "2024-02-15",
      role: "DevOps Engineer",
      skill: "AWS, Docker",
      status: "Pending"
    }
  ];

  const rollOffData = [
    {
      employeeName: "Charlie Brown",
      employeeId: "TCS12347",
      project: "Project Gamma",
      endDate: "2024-01-31",
      role: "Full Stack Developer",
      reason: "Project Completion",
      status: "Completed"
    },
    {
      employeeName: "Diana Prince",
      employeeId: "TCS12348",
      project: "Project Delta",
      endDate: "2024-02-28",
      role: "UI/UX Designer",
      reason: "Internal Transfer",
      status: "In Progress"
    }
  ];

  const teamMovementData = [
    {
      employeeName: "Eve Wilson",
      employeeId: "TCS12349",
      fromProject: "Project Alpha",
      toProject: "Project Epsilon",
      moveDate: "2024-02-10",
      reason: "Skill Alignment",
      status: "Approved"
    },
    {
      employeeName: "Frank Miller",
      employeeId: "TCS12350",
      fromProject: "Project Beta",
      toProject: "Project Zeta",
      moveDate: "2024-02-20",
      reason: "Resource Optimization",
      status: "Pending Approval"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
      case "Completed":
      case "Approved":
        return "bg-primary/10 text-primary";
      case "Pending":
      case "In Progress":
      case "Pending Approval":
        return "bg-accent/10 text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  // Filter functions for search
  const filteredRollOnData = rollOnData.filter(employee =>
    employee.employeeId.toLowerCase().includes(rollOnSearch.toLowerCase())
  );

  const filteredRollOffData = rollOffData.filter(employee =>
    employee.employeeId.toLowerCase().includes(rollOffSearch.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Project Management</h1>
              <p className="text-muted-foreground">Manage employee project assignments and movements</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <UserPlus className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">15</p>
                    <p className="text-sm text-muted-foreground">Roll-ons This Month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-destructive/10">
                    <UserMinus className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-muted-foreground">Roll-offs This Month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-0 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <ArrowRightLeft className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5</p>
                    <p className="text-sm text-muted-foreground">Team Movements</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs for different management sections */}
          <Tabs defaultValue="roll-on" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="roll-on" className="flex items-center">
                <UserPlus className="mr-2 h-4 w-4" />
                Roll On
              </TabsTrigger>
              <TabsTrigger value="roll-off" className="flex items-center">
                <UserMinus className="mr-2 h-4 w-4" />
                Roll Off
              </TabsTrigger>
              <TabsTrigger value="team-movement" className="flex items-center">
                <ArrowRightLeft className="mr-2 h-4 w-4" />
                Team Movement
              </TabsTrigger>
            </TabsList>

            <TabsContent value="roll-on" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Employee Roll-On</h3>
                <Button className="bg-gradient-primary hover-lift">
                  <UserPlus className="mr-2 h-4 w-4" />
                  New Roll-On
                </Button>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by Employee ID..."
                  value={rollOnSearch}
                  onChange={(e) => setRollOnSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              
              <div className="grid gap-4">
                {filteredRollOnData.map((employee, index) => (
                  <Card key={index} className="bg-gradient-card border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-4">
                            <h4 className="font-semibold text-lg">{employee.employeeName}</h4>
                            <Badge variant="outline">{employee.employeeId}</Badge>
                            <Badge className={getStatusColor(employee.status)}>{employee.status}</Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Project:</span>
                              <p className="font-medium">{employee.project}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Role:</span>
                              <p className="font-medium">{employee.role}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Start Date:</span>
                              <p className="font-medium">{new Date(employee.startDate).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Skills:</span>
                              <p className="font-medium">{employee.skill}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="roll-off" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Employee Roll-Off</h3>
                <Button className="bg-gradient-primary hover-lift">
                  <UserMinus className="mr-2 h-4 w-4" />
                  New Roll-Off
                </Button>
              </div>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by Employee ID..."
                  value={rollOffSearch}
                  onChange={(e) => setRollOffSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              
              <div className="grid gap-4">
                {filteredRollOffData.map((employee, index) => (
                  <Card key={index} className="bg-gradient-card border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-4">
                            <h4 className="font-semibold text-lg">{employee.employeeName}</h4>
                            <Badge variant="outline">{employee.employeeId}</Badge>
                            <Badge className={getStatusColor(employee.status)}>{employee.status}</Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Project:</span>
                              <p className="font-medium">{employee.project}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Role:</span>
                              <p className="font-medium">{employee.role}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">End Date:</span>
                              <p className="font-medium">{new Date(employee.endDate).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Reason:</span>
                              <p className="font-medium">{employee.reason}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="team-movement" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Team Movement</h3>
                <Button className="bg-gradient-primary hover-lift">
                  <ArrowRightLeft className="mr-2 h-4 w-4" />
                  New Movement
                </Button>
              </div>
              
              <div className="grid gap-4">
                {teamMovementData.map((employee, index) => (
                  <Card key={index} className="bg-gradient-card border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-4">
                            <h4 className="font-semibold text-lg">{employee.employeeName}</h4>
                            <Badge variant="outline">{employee.employeeId}</Badge>
                            <Badge className={getStatusColor(employee.status)}>{employee.status}</Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">From:</span>
                              <p className="font-medium">{employee.fromProject}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">To:</span>
                              <p className="font-medium">{employee.toProject}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Move Date:</span>
                              <p className="font-medium">{new Date(employee.moveDate).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Reason:</span>
                              <p className="font-medium">{employee.reason}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ProjectManagement;