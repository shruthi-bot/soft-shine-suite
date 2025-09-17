import Navigation from "@/components/Navigation";
import { Users, UserPlus, UserMinus, ArrowRightLeft, Search, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const ProjectManagement = () => {
  const [rollOnSearch, setRollOnSearch] = useState("");
  const [rollOffSearch, setRollOffSearch] = useState("");
  const [rollOnData, setRollOnData] = useState([
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
  ]);

  const [rollOffData, setRollOffData] = useState([
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
  ]);

  const [editingRollOn, setEditingRollOn] = useState(null);
  const [editingRollOff, setEditingRollOff] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

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

  const handleEditRollOn = (employee, index) => {
    setEditingRollOn({ ...employee, index });
    setIsEditDialogOpen(true);
  };

  const handleEditRollOff = (employee, index) => {
    setEditingRollOff({ ...employee, index });
    setIsEditDialogOpen(true);
  };

  const handleSaveRollOn = (updatedEmployee: any) => {
    const newData = [...rollOnData];
    const { index, ...employeeData } = updatedEmployee;
    newData[index] = employeeData;
    setRollOnData(newData);
    setEditingRollOn(null);
    setIsEditDialogOpen(false);
  };

  const handleSaveRollOff = (updatedEmployee: any) => {
    const newData = [...rollOffData];
    const { index, ...employeeData } = updatedEmployee;
    newData[index] = employeeData;
    setRollOffData(newData);
    setEditingRollOff(null);
    setIsEditDialogOpen(false);
  };

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
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleEditRollOn(employee, index)}
                          >
                            <Edit2 className="mr-2 h-3 w-3" />
                            Edit
                          </Button>
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
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleEditRollOff(employee, index)}
                          >
                            <Edit2 className="mr-2 h-3 w-3" />
                            Edit
                          </Button>
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

      {/* Edit Roll-On Dialog */}
      <Dialog open={isEditDialogOpen && editingRollOn} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-gradient-card border-0 max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Roll-On Details</DialogTitle>
          </DialogHeader>
          {editingRollOn && (
            <EditRollOnForm 
              employee={editingRollOn} 
              onSave={handleSaveRollOn}
              onCancel={() => setIsEditDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Roll-Off Dialog */}
      <Dialog open={isEditDialogOpen && editingRollOff} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="bg-gradient-card border-0 max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Roll-Off Details</DialogTitle>
          </DialogHeader>
          {editingRollOff && (
            <EditRollOffForm 
              employee={editingRollOff} 
              onSave={handleSaveRollOff}
              onCancel={() => setIsEditDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Edit Roll-On Form Component
const EditRollOnForm = ({ employee, onSave, onCancel }: any) => {
  const [formData, setFormData] = useState(employee);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="employeeName">Employee Name</Label>
          <Input
            id="employeeName"
            value={formData.employeeName}
            onChange={(e) => setFormData({ ...formData, employeeName: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="employeeId">Employee ID</Label>
          <Input
            id="employeeId"
            value={formData.employeeId}
            onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="project">Project</Label>
          <Input
            id="project"
            value={formData.project}
            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="role">Role</Label>
          <Input
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="skill">Skills</Label>
          <Input
            id="skill"
            value={formData.skill}
            onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Confirmed">Confirmed</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-gradient-primary">
          Save Changes
        </Button>
      </div>
    </form>
  );
};

// Edit Roll-Off Form Component
const EditRollOffForm = ({ employee, onSave, onCancel }: any) => {
  const [formData, setFormData] = useState(employee);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="employeeName">Employee Name</Label>
          <Input
            id="employeeName"
            value={formData.employeeName}
            onChange={(e) => setFormData({ ...formData, employeeName: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="employeeId">Employee ID</Label>
          <Input
            id="employeeId"
            value={formData.employeeId}
            onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="project">Project</Label>
          <Input
            id="project"
            value={formData.project}
            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="endDate">End Date</Label>
          <Input
            id="endDate"
            type="date"
            value={formData.endDate}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="role">Role</Label>
          <Input
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="reason">Reason</Label>
          <Select value={formData.reason} onValueChange={(value) => setFormData({ ...formData, reason: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Project Completion">Project Completion</SelectItem>
              <SelectItem value="Internal Transfer">Internal Transfer</SelectItem>
              <SelectItem value="Client Request">Client Request</SelectItem>
              <SelectItem value="Personal Reasons">Personal Reasons</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-gradient-primary">
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default ProjectManagement;