import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  User, 
  Home, 
  Award, 
  GraduationCap, 
  FolderKanban, 
  UserPlus,
  Settings,
  LogOut,
  ChevronDown,
  Users,
  ArrowRightLeft,
  RotateCcw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegistrationForm from "@/components/RegistrationForm";

const Navigation = () => {
  const location = useLocation();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-card backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">EM</span>
            </div>
            <span className="font-semibold text-lg">Employee Portal</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              asChild
              variant={isActive("/") ? "secondary" : "ghost"}
              className="transition-smooth"
            >
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>

            <Button
              asChild
              variant={isActive("/certification") ? "secondary" : "ghost"}
              className="transition-smooth"
            >
              <Link to="/certification">
                <Award className="mr-2 h-4 w-4" />
                Certification
              </Link>
            </Button>

            <Button
              asChild
              variant={isActive("/training") ? "secondary" : "ghost"}
              className="transition-smooth"
            >
              <Link to="/training">
                <GraduationCap className="mr-2 h-4 w-4" />
                Training
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={location.pathname.startsWith("/project") ? "secondary" : "ghost"}
                  className="transition-smooth"
                >
                  <FolderKanban className="mr-2 h-4 w-4" />
                  Project Management
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 glass">
                <DropdownMenuItem asChild>
                  <Link to="/project/roll-on">
                    <Users className="mr-2 h-4 w-4" />
                    Roll On
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/project/roll-off">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Roll Off
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/project/team-movement">
                    <ArrowRightLeft className="mr-2 h-4 w-4" />
                    Team Movement
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {/* Register Button */}
            <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="hidden sm:flex hover-lift"
                  title="Register new employee"
                >
                  <UserPlus className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Employee Registration</DialogTitle>
                  <DialogDescription>
                    Fill in the employee details to register a new employee.
                  </DialogDescription>
                </DialogHeader>
                <RegistrationForm onClose={() => setIsRegisterOpen(false)} />
              </DialogContent>
            </Dialog>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative p-2 rounded-full hover-lift">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                    <AvatarFallback className="bg-gradient-primary text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 glass">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">john.doe@tcs.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;