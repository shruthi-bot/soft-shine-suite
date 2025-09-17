import { Award, Users, TrendingUp, Clock, BookOpen, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const certificationStats = [
    {
      title: "Active Certifications",
      count: 12,
      icon: Award,
      color: "text-primary",
      bgColor: "bg-primary/10",
      description: "Currently valid certificates"
    },
    {
      title: "Pending Certifications",
      count: 3,
      icon: Clock,
      color: "text-accent-foreground",
      bgColor: "bg-accent/20",
      description: "Awaiting completion"
    },
    {
      title: "Expired Certifications",
      count: 2,
      icon: TrendingUp,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      description: "Need renewal"
    },
    {
      title: "Team Members",
      count: 24,
      icon: Users,
      color: "text-secondary-foreground",
      bgColor: "bg-secondary/20",
      description: "In your project team"
    }
  ];

  const recentActivities = [
    { action: "AWS Cloud Practitioner", status: "Completed", date: "2 days ago", type: "certification" },
    { action: "Java Spring Boot Training", status: "In Progress", date: "1 week ago", type: "training" },
    { action: "Project Alpha Roll-on", status: "Completed", date: "2 weeks ago", type: "project" },
    { action: "Agile Methodology Certification", status: "Pending", date: "3 weeks ago", type: "certification" },
  ];

  const skillProgress = [
    { skill: "React Development", progress: 85, level: "Advanced" },
    { skill: "Node.js", progress: 70, level: "Intermediate" },
    { skill: "AWS Services", progress: 60, level: "Intermediate" },
    { skill: "Docker & Kubernetes", progress: 45, level: "Beginner" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-white/80">Here's an overview of your professional development journey.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificationStats.map((stat, index) => (
          <Card key={index} className="hover-lift bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.count}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <Card className="bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Recent Activities
            </CardTitle>
            <CardDescription>
              Your latest training and certification activities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-background/50">
                <div className={`p-2 rounded-full ${
                  activity.type === 'certification' ? 'bg-primary/10' :
                  activity.type === 'training' ? 'bg-accent/10' : 'bg-secondary/10'
                }`}>
                  {activity.type === 'certification' ? 
                    <Award className="h-4 w-4 text-primary" /> :
                    activity.type === 'training' ?
                    <BookOpen className="h-4 w-4 text-accent-foreground" /> :
                    <Target className="h-4 w-4 text-secondary-foreground" />
                  }
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.action}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activity.status === 'Completed' ? 'bg-primary/10 text-primary' :
                      activity.status === 'In Progress' ? 'bg-accent/10 text-accent-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {activity.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{activity.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skill Progress */}
        <Card className="bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Skill Development
            </CardTitle>
            <CardDescription>
              Track your technical skill progression
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {skillProgress.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{skill.skill}</span>
                  <span className="text-xs text-muted-foreground">{skill.level}</span>
                </div>
                <Progress value={skill.progress} className="h-2" />
                <div className="text-right">
                  <span className="text-xs text-muted-foreground">{skill.progress}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;